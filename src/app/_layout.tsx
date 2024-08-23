import '../theme/global.css';

import { ApolloProvider } from '@apollo/client';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import type { FC, PropsWithChildren } from 'react';

import { apolloClient } from '@/apollo';
import { AppRootProvider, AppThemeProvider } from '@/context';

SplashScreen.preventAutoHideAsync();

export const AppProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <AppThemeProvider>
        <AppRootProvider>{children}</AppRootProvider>
      </AppThemeProvider>
    </ApolloProvider>
  );
};

export default function Layout() {
  return (
    <AppProviders>
      <Slot />
    </AppProviders>
  );
}
