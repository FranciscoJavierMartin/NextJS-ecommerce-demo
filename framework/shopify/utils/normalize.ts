import { ImageConnection, Product as ShopifyProduct, MoneyV2 } from '../schema';
import { Product, ProductImage, ProductPrice } from '@common/types/product';

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

export function normalizeProduct({
  id,
  title: name,
  handle,
  description,
  images: imageConnection,
  priceRange,
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
    ...rest,
  };
}
