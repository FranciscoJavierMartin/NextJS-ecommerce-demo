import { useHook, useMutationHook } from '@common/utils/useHook';

function useAddItem() {
  const hook = useHook((hooks) => hooks.cart.useAddItem);
  return useMutationHook({ ...hook });
}

export default useAddItem;
