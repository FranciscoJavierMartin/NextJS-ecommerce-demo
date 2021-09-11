import fetchApi from '../utils/fetchApi';
import getAllProductsQuery from '../utils/queries/getAllProducts';

export default async (): Promise<any[]> => {
  return await fetchApi({ query: getAllProductsQuery });
};
