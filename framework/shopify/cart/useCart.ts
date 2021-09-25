import { useMemo } from 'react';
import useCart from '@common/cart/useCart';
import { createCheckout, getCheckoutQuery } from '@framework/utils';

export const handler = {
  fetchOptions: {
    query: getCheckoutQuery,
  },
  async fetcher({ fetch, options, input: { checkoutId } }: any) {
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

    return checkout;
  },
  useHook: ({ useData }: any) => {
    const data = useData({
      swrOptions: {
        revalidateOnFocus: false,
      },
    });
    return useMemo(() => data, [data]);
  },
};

export default useCart;
