import Cookies from 'js-cookie';
import { ApiFetcher } from '@common/types/api';
import { Checkout, CheckoutCreatePayload, Maybe } from '@framework/schema';
import { checkoutCreateMutation } from './mutations';
import {
  SHOPIFY_CHECKOUT_ID_COOKIE_KEY,
  SHOPIFY_CHECKOUT_URL_COOKIE,
  SHOPIFY_COOKIE_EXPIRE,
} from '@framework/constants';

const createCheckout = async (
  fetch: ApiFetcher<{ checkoutCreate: CheckoutCreatePayload }>
): Promise<Checkout> => {
  const { data } = await fetch({
    query: checkoutCreateMutation,
  });
  const { checkout } = data.checkoutCreate;

  if (!checkout) {
    throw new Error('Checkout cannot be created');
  }

  const checkoutId = checkout?.id;

  if (checkoutId) {
    const options = {
      expires: SHOPIFY_COOKIE_EXPIRE,
    };

    Cookies.set(SHOPIFY_CHECKOUT_ID_COOKIE_KEY, checkoutId, options);
    Cookies.set(SHOPIFY_CHECKOUT_URL_COOKIE, checkout?.webUrl, options);
  }

  return checkout;
};

export default createCheckout;
