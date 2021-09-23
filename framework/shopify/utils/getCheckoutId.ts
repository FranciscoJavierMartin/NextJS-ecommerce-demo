import { SHOPIFY_CHECKOUT_ID_COOKIE_KEY } from '@framework/constants';
import Cookie from 'js-cookie';

function getCheckoutId(): string | undefined {
  return Cookie.get(SHOPIFY_CHECKOUT_ID_COOKIE_KEY);
}

export default getCheckoutId;
