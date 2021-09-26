import { useMemo } from 'react';
import useCart, { UseCart } from '@common/cart/useCart';
import {
  checkoutToCart,
  createCheckout,
  getCheckoutQuery,
} from '@framework/utils';
import { Cart } from '@common/types/cart';
import { SWRHook } from '@common/types/hooks';
import { Checkout } from '@framework/schema';

export type UseCartHookDescriptor = {
  fetcherInput: {
    checkoutId: string;
  };
  fetcherOutput: {
    node: Checkout;
  };
  data: Cart;
};

export const handler: SWRHook<UseCartHookDescriptor> = {
  fetcherOptions: {
    query: getCheckoutQuery,
  },
  async fetcher({ fetch, options, input: { checkoutId } }): Promise<Cart> {
    let checkout: Checkout;

    if (checkoutId) {
      const { data } = await fetch({
        ...options,
        variables: {
          checkoutId,
        },
      });
      checkout = data.node;
    } else {
      checkout = await createCheckout(fetch as any);
    }

    const cart = checkoutToCart(checkout);

    return cart;
  },
  useHook:
    ({ useData }) =>
    () => {
      const data = useData({
        swrOptions: {
          revalidateOnFocus: false,
        },
      });
      return useMemo(() => {
        return data;
      }, [data]);
    },
};

export default useCart as UseCart<typeof handler>;
