import { ApolloProvider } from '@apollo/client';
import React from 'react';
import type { FC, PropsWithChildren } from 'react';

import { apolloClient } from './apollo';
import { AppStartProvider, AppThemeProvider } from './context';
import { AppNavigation } from './router';

export const AppProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <AppThemeProvider>
        <AppStartProvider>{children}</AppStartProvider>
      </AppThemeProvider>
    </ApolloProvider>
  );
};

export default function AppNative() {
  return (
    <AppProviders>
      <AppNavigation />
    </AppProviders>
  );
}
