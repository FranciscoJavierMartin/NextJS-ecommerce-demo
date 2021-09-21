import { FC } from 'react';
import {
  ApiProvider as CoreApiProvider,
  useApiProvider as useCoreApiProvider,
} from '@common';
import { getConfig } from './api/config';

const config = getConfig();

export const ApiProvider: FC = ({ children }) => {
  return <CoreApiProvider config={{ ...config }}>{children}</CoreApiProvider>;
};

export const useApiProvider = () => useCoreApiProvider();
