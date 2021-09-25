import { ApiConfig } from '@common/types/api';
import { SHOPIFY_CHECKOUT_ID_COOKIE_KEY } from '@framework/constants';
import { fetchApi } from '@framework/utils';

class Config {
  constructor(private config: ApiConfig) {}

  getConfig(): ApiConfig {
    return this.config;
  }
}

const configWrapper = new Config({
  fetch: fetchApi,
  checkoutCookie: SHOPIFY_CHECKOUT_ID_COOKIE_KEY,
});

export function getConfig(): ApiConfig {
  return configWrapper.getConfig();
}
