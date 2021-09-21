import { createContext, FC, useContext } from 'react';
import { ApiConfig } from './types/api';

export const ApiContext = createContext({});

interface ApiProviderProps {
  config: ApiConfig;
}

export const ApiProvider: FC<ApiProviderProps> = ({ children, config }) => {
  return <ApiContext.Provider value={config}>{children}</ApiContext.Provider>;
};

export const useApiProvider = () => useContext(ApiContext);
