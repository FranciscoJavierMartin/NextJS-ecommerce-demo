import useAddItem, { UseAddItem } from '@common/cart/useAddItem';
import useCart from '@common/cart/useCart';
import { Cart } from '@common/types/cart';
import { MutationHook } from '@common/types/hooks';
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
    () => {
      const { mutate: updateCart } = useCart();
      return async (input) => {
        const response = await fetch(input);
        await updateCart(response, false);
        return response;
      };
    },
};
