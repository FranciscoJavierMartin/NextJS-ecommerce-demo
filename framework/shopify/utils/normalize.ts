import { ImageConnection, Product as ShopifyProduct } from '../schema';

function normalizeProductImage({ edges }: ImageConnection) {
  return edges.map(({ node: { originalSrc, ...rest } }) => ({
    url: `/images/${originalSrc}`,
    ...rest,
  }));
}

export function normalizeProduct({
  id,
  title: name,
  handle,
  vendor,
  description,
  images: imageConnection,
  ...rest
}: ShopifyProduct): any {
  return {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizeProductImage(imageConnection),
    ...rest,
  };
}
