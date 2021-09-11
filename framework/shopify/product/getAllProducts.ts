import { Product } from '@common/types/product';
import { ProductConnection } from '../schema';
import fetchApi from '../utils/fetchApi';
import { normalizeProduct } from '../utils/normalize';
import getAllProductsQuery from '../utils/queries/getAllProducts';

export default async (): Promise<Product[]> => {
  const { data } = await fetchApi<{ products: ProductConnection }>({
    query: getAllProductsQuery,
  });
  return data.products.edges.map(({ node }) => normalizeProduct(node)) ?? [];
};
