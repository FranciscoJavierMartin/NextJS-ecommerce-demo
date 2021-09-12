import { ApiConfig } from '@common/types/api';
import { fetchApi } from '@framework/utils';

class Config {
  constructor(private config: ApiConfig) {}

  getConfig(): ApiConfig {
    return this.config;
  }
}

const configWrapper = new Config({
  apiUrl: process.env.SERVER_API!,
  fetch: fetchApi,
});

export function getConfig(): ApiConfig {
  return configWrapper.getConfig();
}
