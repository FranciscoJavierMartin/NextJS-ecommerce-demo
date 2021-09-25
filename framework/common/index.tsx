import { createContext, FC, useContext, useMemo } from 'react';
import { ApiConfig, ApiProviderContext } from './types/api';
import { ApiHooks } from './types/hooks';

export const ApiContext = createContext<ApiProviderContext>(
  {} as ApiProviderContext
);

interface ApiProviderProps {
  config: ApiConfig;
  hooks: ApiHooks;
}

export const ApiProvider: FC<ApiProviderProps> = ({
  children,
  config,
  hooks,
}) => {
  const coreConfig = useMemo(
    () => ({
      fetcher: config.fetch,
      hooks,
      checkoutCookie: config.checkoutCookie,
    }),
    [config.fetch, hooks, config.checkoutCookie]
  );

  return (
    <ApiContext.Provider value={coreConfig}>{children}</ApiContext.Provider>
  );
};

export const useApiProvider = () => useContext<ApiProviderContext>(ApiContext);
