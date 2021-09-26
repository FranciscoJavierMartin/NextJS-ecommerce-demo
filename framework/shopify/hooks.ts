import { handler as useAddItem } from './cart/useAddItem';
import { handler as useCart } from './cart/useCart';
import { handler as useRemoveItem } from './cart/useRemoveItem';
import { handler as useUpdateItem } from './cart/useUpdateItem';

export const shopifyHooks = {
  cart: {
    useAddItem,
    useCart,
    useRemoveItem,
    useUpdateItem,
  },
};
