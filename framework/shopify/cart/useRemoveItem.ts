import useRemoveItem from "@common/cart/useRemoveItem";

export default useRemoveItem;

export const handler = {
  fetcherOptions: {
    query: '',
  },
  async fetcher({ input, options, fetch }: any) {
    const { data } = await fetch({ ...options });

    return data;
  },
  useHook:
    ({ fetch }: any) =>
    async () => {
      return async (input: any) => {
        const data = await fetch();
        return data;
      };
    },
};
