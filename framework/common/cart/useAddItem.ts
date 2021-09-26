import { MutationHook } from '@common/types/hooks';
import { useHook, useMutationHook } from '@common/utils/useHook';

export type UseAddItem<H extends MutationHook = MutationHook<any>> = ReturnType<
  H['useHook']
>;

const useAddItem: UseAddItem = () => {
  const hook = useHook((hooks) => hooks.cart.useAddItem);
  return useMutationHook({ ...hook })();
};

export default useAddItem;
