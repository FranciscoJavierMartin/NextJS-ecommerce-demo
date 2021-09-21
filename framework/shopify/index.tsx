import { FC } from 'react';
import {
  ApiProvider as CoreApiProvider,
  useApiProvider as useCoreApiProvider,
} from '@common';
import { getConfig } from './api/config';
import { shopifyHooks } from './hooks';

const config = getConfig();

export const ApiProvider: FC = ({ children }) => {
  return (
    <CoreApiProvider config={{ ...config }} hooks={shopifyHooks}>
      {children}
    </CoreApiProvider>
  );
};

export const useApiProvider = () => useCoreApiProvider();
