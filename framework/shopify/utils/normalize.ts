import {
  ImageConnection,
  Product as ShopifyProduct,
  MoneyV2,
  ProductOption as ShopifyProductOption,
  ProductVariantConnection,
  SelectedOption,
  Checkout,
  CheckoutLineItemEdge,
} from '../schema';
import {
  Product,
  ProductImage,
  ProductPrice,
  ProductVariant,
  ProductOption,
} from '@common/types/product';
import { Cart, LineItem } from '@common/types/cart';

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

export function normalizeCart(checkout: Checkout): Cart {
  return {
    id: checkout.id,
    createdAt: checkout.createdAt,
    currency: {
      code: checkout.totalPriceV2.currencyCode,
    },
    taxesIncluded: checkout.taxesIncluded,
    lineItemsSubtotalPrice: +checkout.subtotalPriceV2.amount,
    totalPrice: checkout.totalPriceV2.amount,
    lineItems: checkout.lineItems.edges.map(normalizeLineItem),
    discounts: [],
  };
}

export function normalizeLineItem({
  node: { id, title, variant, ...rest },
}: CheckoutLineItemEdge): LineItem {
  return {
    id,
    variantId: variant?.id || '',
    productId: variant?.id || '',
    name: title,
    path: variant?.product?.handle ?? '',
    discounts: [],
    options: variant?.selectedOptions.map(({ name, value }: SelectedOption) =>
      normalizeProductOption({ id, name, values: [value] })
    ),
    variant: {
      id: variant?.id,
      sku: variant?.sku ?? '',
      name: variant?.title,
      image: {
        // Just because this is a demo project
        url: `/images/${variant?.image?.originalSrc}`,
      },
      requiresShipping: variant?.requiresShipping ?? false,
      price: variant?.priceV2.amount,
      listPrice: variant?.compareAtPriceV2?.amount,
    },
    ...rest,
  };
}
