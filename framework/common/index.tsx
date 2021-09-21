import { createContext, FC, useContext, useMemo } from 'react';
import { ApiConfig, ApiHooks, ApiProviderContext } from './types/api';

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
    }),
    [config.fetch, hooks]
  );

  return (
    <ApiContext.Provider value={coreConfig}>{children}</ApiContext.Provider>
  );
};

export const useApiProvider = () => useContext<ApiProviderContext>(ApiContext);
