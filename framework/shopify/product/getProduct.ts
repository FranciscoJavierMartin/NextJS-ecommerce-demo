import { ApiConfig, Variables } from '@common/types/api';
import { getProductQuery, normalizeProduct } from '@framework/utils';
import { Product as ShopifyProduct } from '@framework/schema';
import { Product } from '@common/types/product';

export default async (
  config: ApiConfig,
  variables?: Variables
): Promise<{ product: Product | null }> => {
  const {
    data: { productByHandle },
  } = await config.fetch<{ productByHandle: ShopifyProduct }>({
    query: getProductQuery,
    url: config.apiUrl,
    variables,
  });

  return {
    product: productByHandle ? normalizeProduct(productByHandle) : null,
  };
};
