import {
  ImageConnection,
  Product as ShopifyProduct,
  MoneyV2,
  ProductOption as ShopifyProductOption,
  ProductVariantConnection,
  SelectedOption,
} from '../schema';
import {
  Product,
  ProductImage,
  ProductPrice,
  ProductVariant,
  ProductOption,
} from '@common/types/product';

function normalizeProductImage({ edges }: ImageConnection): ProductImage[] {
  return edges.map(({ node: { originalSrc, ...rest } }) => ({
    url: `/images/${originalSrc}`,
    ...rest,
  }));
}

function normalizeProductPrice({
  currencyCode,
  amount,
}: MoneyV2): ProductPrice {
  return {
    value: +amount,
    currencyCode,
  };
}

function normalizeProductOption({
  id,
  values,
  name: displayName,
}: ShopifyProductOption): ProductOption {
  return {
    id,
    displayName,
    values: values.map((value) => {
      let output: any = {
        label: value,
      };

      if (displayName.match(/colou?r/gi)) {
        output = {
          ...output,
          hexColor: value,
        };
      }

      return output;
    }),
  };
}

function normalizeProductVariants({
  edges,
}: ProductVariantConnection): ProductVariant[] {
  return edges.map(
    ({
      node: { id, selectedOptions, sku, title, priceV2, compareAtPriceV2 },
    }) => ({
      id,
      name: title,
      sku: sku || id,
      price: +priceV2.amount,
      listPrice: +compareAtPriceV2?.amount,
      requiresShipping: true,
      options: selectedOptions.map(({ name, value }: SelectedOption) =>
        normalizeProductOption({
          id,
          name,
          values: [value],
        })
      ),
    })
  );
}

export function normalizeProduct({
  id,
  title: name,
  handle,
  description,
  images: imageConnection,
  priceRange,
  options,
  variants,
  ...rest
}: ShopifyProduct): Product {
  return {
    id,
    name,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizeProductImage(imageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    options: options
      ? options.filter((o) => o.name !== 'Title').map(normalizeProductOption)
      : [],
    variants: variants ? normalizeProductVariants(variants) : [],
    ...rest,
  };
}
