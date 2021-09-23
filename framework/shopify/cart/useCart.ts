import useCart from '@common/cart/useCart';

export const handler = {
  fetchOptions: {
    query: '',
  },
  fetcher() {
    return {
      data: '',
    };
  },
  useHook: ({ fetch }: any) => {
    const data = fetch();
    return {
      data,
    };
  },
};

export default useCart;
