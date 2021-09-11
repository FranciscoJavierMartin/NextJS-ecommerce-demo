import { Product } from '@common/types/product';
import { ProductConnection } from '../schema';
import { fetchApi, normalizeProduct, getAllProductsQuery } from '../utils';

export default async (): Promise<Product[]> => {
  const { data } = await fetchApi<{ products: ProductConnection }>({
    query: getAllProductsQuery,
  });
  return data.products.edges.map(({ node }) => normalizeProduct(node)) ?? [];
};
