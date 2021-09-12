import { ApiConfig } from '@common/types/api';
import { Product } from '@common/types/product';
import { ProductConnection } from '../schema';
import { normalizeProduct, getAllProductsQuery } from '../utils';

export default async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<{ products: ProductConnection }>({
    query: getAllProductsQuery,
    url: config.apiUrl,
  });
  return data.products.edges.map(({ node }) => normalizeProduct(node)) ?? [];
};
