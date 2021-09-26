import { useHook, useMutationHook } from '@common/utils/useHook';
import { MutationHook } from '@common/types/hooks';

export type UseUpdateItem<H extends MutationHook = MutationHook<any>> =
  ReturnType<H['useHook']>;

const useUpdateItem: UseUpdateItem = () => {
  const hook = useHook((hooks) => hooks.cart.useUpdateItem);
  return useMutationHook({ ...hook })();
};

export default useUpdateItem;
