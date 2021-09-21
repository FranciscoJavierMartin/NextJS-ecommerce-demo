import useAddItem from '@common/cart/useAddItem';

export default useAddItem;

export const handler = {
  fetcher: () => {},
  useHook: () => {
    return (input: any) => {
      return {
        output: '',
      };
    };
  },
};
