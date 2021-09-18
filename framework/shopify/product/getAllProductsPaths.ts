import { ApiConfig } from '@common/types/api';
import { Product } from '@common/types/product';
import { ProductConnection } from '@framework/schema';
import getAllProductPathsQuery from '@framework/utils/queries/getAllProductPaths';

type ReturnType = {
  products: Pick<Product, 'slug'>[];
};
export default async (config: ApiConfig): Promise<ReturnType> => {
  const { data } = await config.fetch<{ products: ProductConnection }>({
    query: getAllProductPathsQuery,
    url: config.apiUrl,
  });
  return {
    products: data.products.edges.map(({ node: { handle } }) => ({
      slug: handle,
    })),
  };
};
