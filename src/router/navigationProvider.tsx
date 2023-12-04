import NetInfo from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/core';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useLayoutEffect, useState } from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { FC, PropsWithChildren } from 'react';

import { useAppStart } from '@/context';

import type { RootStackParamList } from './navigation';

const NavigationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [noNetwork, setNoNetwork] = useState(false);

  const { navigate, canGoBack, goBack } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { appIsReady } = useAppStart();

  useLayoutEffect(() => {
    const unsubscribe = NetInfo.addEventListener(async ({ isConnected, isInternetReachable }) =>
      setNoNetwork(!isConnected || !isInternetReachable),
    );

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.hideAsync();

      if (noNetwork) navigate('NoInternet');

      if (!noNetwork && canGoBack()) goBack();
    };

    if (appIsReady) prepare();
  }, [navigate, noNetwork, canGoBack, goBack, appIsReady]);

  return children;
};

export default NavigationProvider;
