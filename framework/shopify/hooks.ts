import { handler as useAddItem } from './cart/useAddItem';
import { handler as useCart } from './cart/useCart';

export const shopifyHooks = {
  cart: {
    useAddItem,
    useCart,
  },
};
