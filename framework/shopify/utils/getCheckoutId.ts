import { SHOPIFY_CHECKOUT_ID_COOKIE_KEY } from '@framework/constants';
import Cookies from 'js-cookie';

function getCheckoutId(): string | undefined {
  return Cookies.get(SHOPIFY_CHECKOUT_ID_COOKIE_KEY);
}

export default getCheckoutId;
