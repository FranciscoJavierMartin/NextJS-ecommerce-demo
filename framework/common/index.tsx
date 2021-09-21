import { createContext, FC, useContext, useMemo } from 'react';
import { ApiConfig } from './types/api';

export const ApiContext = createContext({});

interface ApiProviderProps {
  config: ApiConfig;
}

export const ApiProvider: FC<ApiProviderProps> = ({ children, config }) => {
  const coreConfig = useMemo(
    () => ({
      fetcher: config.fetch,
    }),
    [config.fetch]
  );

  return (
    <ApiContext.Provider value={coreConfig}>{children}</ApiContext.Provider>
  );
};

export const useApiProvider = () => useContext(ApiContext);
