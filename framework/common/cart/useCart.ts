import { ApiHooks } from '@common/types/hooks';
import { useHook } from '@common/utils/useHook';

function useCart() {
  const hook = useHook((hooks: ApiHooks) => hooks.cart.useCart);
  return hook.useHook({
    fetch: hook.fetcher,
  });
}

export default useCart;
