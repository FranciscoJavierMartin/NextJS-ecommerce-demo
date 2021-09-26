import { useHook, useMutationHook } from '@common/utils/useHook';

const useUpdateItem = () => {
  const hook = useHook((hooks) => hooks.cart.useUpdateItem);
  return useMutationHook({ ...hook })();
};

export default useUpdateItem;
