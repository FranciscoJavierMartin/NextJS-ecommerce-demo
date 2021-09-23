import { ApiConfig } from '@common/types/api';
import { Product } from '@common/types/product';
import { ProductConnection } from '@framework/schema';
import { getAllProductPathsQuery } from '@framework/utils/queries/';

type ReturnType = {
  products: Pick<Product, 'slug'>[];
};

async function getAllProductPaths(config: ApiConfig): Promise<ReturnType> {
  const { data } = await config.fetch<{ products: ProductConnection }>({
    query: getAllProductPathsQuery,
  });
  return {
    products: data.products.edges.map(({ node: { handle } }) => ({
      slug: handle,
    })),
  };
}

export default getAllProductPaths;
