import useAddItem from '@common/cart/useAddItem';
import {
  FetcherHookContext,
  MutationHook,
  MutationHookContext,
} from '@common/types/hooks';
import { getCheckoutId } from '@framework/utils';

export default useAddItem;

export const handler: MutationHook = {
  fetcherOptions: {
    query: '',
  },
  fetcher: async ({ fetch, options, input }: FetcherHookContext) =>
    await fetch({
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
    }),
  useHook: ({ fetch }: MutationHookContext) => {
    return async (input: any) => {
      const response = await fetch(input);
      return {
        output: response,
      };
    };
  },
};
