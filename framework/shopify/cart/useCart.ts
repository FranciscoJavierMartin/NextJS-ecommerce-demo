import useCart from '@common/cart/useCart';

export const handler = {
  fetchOptions: {
    query: '',
  },
  async fetcher({ fetch, options }: any) {
    const data = await fetch({ ...options });
    return {
      data,
    };
  },
  useHook: ({ useData }: any) => {
    const data = useData();
    return {
      data,
    };
  },
};

export default useCart;
