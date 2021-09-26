import useCart from '@common/cart/useCart';
import useRemoveItem from '@common/cart/useRemoveItem';
import { Cart } from '@common/types/cart';
import { MutationHook } from '@common/types/hooks';
import { CheckoutLineItemsRemovePayload } from '@framework/schema';
import { checkoutToCart, getCheckoutId } from '@framework/utils';
import { checkoutLineItemsRemoveMutation } from '@framework/utils/mutations';

export default useRemoveItem;

export type RemoveItemDescriptor = {
  fetcherInput: {
    id: string;
  };
  fetcherOutput: {
    checkoutLineItemsRemove: CheckoutLineItemsRemovePayload;
  };
  data: Cart;
};
export const handler: MutationHook<RemoveItemDescriptor> = {
  fetcherOptions: {
    query: checkoutLineItemsRemoveMutation,
  },
  async fetcher({ input: { id }, options, fetch }) {
    const { data } = await fetch({
      ...options,
      variables: {
        checkoutId: getCheckoutId(),
        lineItemIds: [id],
      },
    });

    return checkoutToCart(data.checkoutLineItemsRemove.checkout);
  },
  useHook:
    ({ fetch }) =>
    () => {
      const { mutate: updateCart } = useCart();
      return async (input) => {
        const data = await fetch(input);
        updateCart(data, false);
        return data;
      };
    },
};
