import Entypo from '@expo/vector-icons/Entypo';
import * as Font from 'expo-font';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';

type AppStartContextProps = {
  appIsReady: boolean;
};

const AppStartContext = createContext({} as AppStartContextProps);

const AppStartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);

        // Time to check the network connection
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    };

    prepare();
  }, []);

  const value = useMemo(() => ({ appIsReady }), [appIsReady]);

  return <AppStartContext.Provider value={value}>{children}</AppStartContext.Provider>;
};

const useAppStart = () => useContext(AppStartContext);

export { AppStartContext, AppStartProvider, useAppStart };
