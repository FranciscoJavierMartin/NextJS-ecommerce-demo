import useAddItem, { UseAddItem } from '@common/cart/useAddItem';
import { Cart } from '@common/types/cart';
import {
  HookFetcherContext,
  MutationHook,
  MutationHookContext,
} from '@common/types/hooks';
import { CheckoutLineItemsAddPayload } from '@framework/schema';
import { getCheckoutId, checkoutToCart } from '@framework/utils';
import { checkoutLineItemsAddMutation } from '@framework/utils/mutations';

export default useAddItem as UseAddItem<typeof handler>;

export type AddItemHookDescriptor = {
  fetcherInput: {
    variantId: string;
    quantity: number;
  };
  fetcherOutput: {
    checkoutLineItemsAdd: CheckoutLineItemsAddPayload;
  };
  data: Cart;
};

export const handler: MutationHook<AddItemHookDescriptor> = {
  fetcherOptions: {
    query: checkoutLineItemsAddMutation,
  },
  fetcher: async ({ fetch, options, input }) => {
    const { data } = await fetch({
      ...options,
      variables: {
        checkoutId: getCheckoutId(),
        lineItems: [
          {
            variantId: input.variantId,
            quantity: 1,
          },
        ],
      },
    });

    return checkoutToCart(data.checkoutLineItemsAdd.checkout);
  },
  useHook:
    ({ fetch }) =>
    () =>
    async (input) =>
      await fetch(input),
};
