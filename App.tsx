// import 'react-native-url-polyfill/auto';

import * as SplashScreen from 'expo-splash-screen';
import React from 'react';

import AppNative from './src';

SplashScreen.preventAutoHideAsync();

export default function App() {
  return <AppNative />;
}
