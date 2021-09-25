import { useMemo } from 'react';
import useCart from '@common/cart/useCart';
import {
  checkoutToCart,
  createCheckout,
  getCheckoutQuery,
} from '@framework/utils';
import { Cart } from '@common/types/cart';

export const handler = {
  fetchOptions: {
    query: getCheckoutQuery,
  },
  async fetcher({ fetch, options, input: { checkoutId } }: any): Promise<Cart> {
    let checkout;

    if (checkoutId) {
      const { data } = await fetch({
        ...options,
        variables: {
          checkoutId,
        },
      });
      checkout = data.node;
    } else {
      checkout = await createCheckout(fetch);
    }

    const cart = checkoutToCart(checkout);

    return cart;
  },
  useHook: ({ useData }: any) => {
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

export default useCart;
