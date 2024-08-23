import {
  HankenGrotesk_100Thin,
  HankenGrotesk_100Thin_Italic,
  HankenGrotesk_200ExtraLight,
  HankenGrotesk_200ExtraLight_Italic,
  HankenGrotesk_300Light,
  HankenGrotesk_300Light_Italic,
  HankenGrotesk_400Regular,
  HankenGrotesk_400Regular_Italic,
  HankenGrotesk_500Medium,
  HankenGrotesk_500Medium_Italic,
  HankenGrotesk_600SemiBold,
  HankenGrotesk_600SemiBold_Italic,
  HankenGrotesk_700Bold,
  HankenGrotesk_700Bold_Italic,
  HankenGrotesk_800ExtraBold,
  HankenGrotesk_800ExtraBold_Italic,
  HankenGrotesk_900Black,
  HankenGrotesk_900Black_Italic,
  useFonts,
} from '@expo-google-fonts/hanken-grotesk';
import NetInfo from '@react-native-community/netinfo';
import * as SplashScreen from 'expo-splash-screen';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';

type AppRootContextProps = {
  appIsReady: boolean;
  noNetwork: boolean;
};

const AppRootContext = createContext({} as AppRootContextProps);

const AppRootProvider: FC<PropsWithChildren> = ({ children }) => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [noNetwork, setNoNetwork] = useState(false);

  const [fontsLoaded] = useFonts({
    HankenGrotesk_100Thin,
    HankenGrotesk_200ExtraLight,
    HankenGrotesk_300Light,
    HankenGrotesk_400Regular,
    HankenGrotesk_500Medium,
    HankenGrotesk_600SemiBold,
    HankenGrotesk_700Bold,
    HankenGrotesk_800ExtraBold,
    HankenGrotesk_900Black,
    HankenGrotesk_100Thin_Italic,
    HankenGrotesk_200ExtraLight_Italic,
    HankenGrotesk_300Light_Italic,
    HankenGrotesk_400Regular_Italic,
    HankenGrotesk_500Medium_Italic,
    HankenGrotesk_600SemiBold_Italic,
    HankenGrotesk_700Bold_Italic,
    HankenGrotesk_800ExtraBold_Italic,
    HankenGrotesk_900Black_Italic,
  });

  const onAppIsReady = async () => {
    setAppIsReady(true);

    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    if (fontsLoaded) onAppIsReady();
  }, [fontsLoaded]);

  const value = useMemo(() => ({ appIsReady, noNetwork }), [appIsReady, noNetwork]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(async ({ isConnected, isInternetReachable }) =>
      setNoNetwork(!isConnected || !isInternetReachable === false),
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return <AppRootContext.Provider value={value}>{children}</AppRootContext.Provider>;
};

const useAppRoot = () => useContext(AppRootContext);

export { AppRootContext, AppRootProvider, useAppRoot };
