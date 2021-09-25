import { Cart } from '@common/types/cart';
import { Checkout, Maybe } from '@framework/schema';
import { normalizeCart } from './normalize';

export default function checkoutToCart(checkout?: Maybe<Checkout>): Cart {
  if (!checkout) {
    throw new Error('Missing checkout object');
  }

  return normalizeCart(checkout);
}
