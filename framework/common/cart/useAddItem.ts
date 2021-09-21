import { useHook } from '@common/utils/useHook';

function useAddItem() {
  const hook = useHook((hooks) => hooks.cart.useAddItem);
  return hook.useHook({ fetch: hook.fetcher });
}

export default useAddItem;
