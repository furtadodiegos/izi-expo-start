import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react-native';
import type { FC, ReactElement } from 'react';
import { AppProviders } from '../src';

const customRender = (ui: ReactElement) => {
  const Wrapper: FC<PropsWithChildren> = ({ children }) => <AppProviders>{children}</AppProviders>;

  return render(ui, { wrapper: Wrapper });
};

export function sleep(timeout: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export * from '@testing-library/react-native';

export { customRender as render };
