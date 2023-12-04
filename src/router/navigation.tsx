import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { createRef } from 'react';
import type { NavigationContainerRef } from '@react-navigation/native';
import type { FC } from 'react';

import { useAppTheme } from '@/context';
import { HomeScreen, LoginScreen, NoInternetScreen, OnboardingScreen } from '@/screens';
import { darkTheme, lightTheme } from '@/theme';

import NavigationProvider from './navigationProvider';

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Home: undefined;
  NoInternet: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const navigationRef = createRef<NavigationContainerRef<RootStackParamList>>();

export const AppNavigation: FC = () => {
  const { currentTheme } = useAppTheme();

  return (
    <NavigationContainer
      theme={currentTheme === 'dark' ? darkTheme : lightTheme}
      ref={navigationRef}
      // onReady={() => setIsReady(true)}
    >
      <NavigationProvider>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Screen name="Onboarding" component={OnboardingScreen} />

          <Screen name="Login" component={LoginScreen} />

          <Screen name="Home" component={HomeScreen} />

          <Screen name="NoInternet" component={NoInternetScreen} />
        </Navigator>
      </NavigationProvider>
    </NavigationContainer>
  );
};
