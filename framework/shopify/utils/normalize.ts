import { ImageConnection, Product as ShopifyProduct } from '../schema';
import { Product, ProductImage } from '@common/types/product';

function normalizeProductImage({ edges }: ImageConnection): ProductImage[] {
  return edges.map(({ node: { originalSrc, ...rest } }) => ({
    url: `/images/${originalSrc}`,
    ...rest,
  }));
}

export function normalizeProduct({
  id,
  title: name,
  handle,
  description,
  images: imageConnection,
  ...rest
}: ShopifyProduct): Product {
  return {
    id,
    name,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizeProductImage(imageConnection),
    ...rest,
  };
}
