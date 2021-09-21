import useAddItem from '@common/cart/useAddItem';

export default useAddItem;

export const handler = {
  fetcher: (input: any) => {
    return input;
  },
  useHook: ({ fetch }: any) => {
    return (input: any) => {
      const response = fetch(input);
      return {
        output: response,
      };
    };
  },
};
