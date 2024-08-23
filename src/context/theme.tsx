import { useColorScheme } from 'nativewind';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';

type CurrentThemeProps = 'light' | 'dark';

type AppThemeContextProps = {
  currentTheme: CurrentThemeProps;
  toggleTheme: () => void;
};

const AppThemeContext = createContext({} as AppThemeContextProps);

const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { setColorScheme, colorScheme } = useColorScheme();

  const [currentTheme, setCurrentTheme] = useState<CurrentThemeProps>(colorScheme === 'dark' ? 'dark' : 'light');

  const toggleTheme = () => setCurrentTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));

  const value = useMemo(
    () => ({
      currentTheme,
      toggleTheme,
    }),
    [currentTheme],
  );

  useEffect(() => {
    setColorScheme(currentTheme);
  }, [currentTheme, setColorScheme]);

  return <AppThemeContext.Provider value={value}>{children}</AppThemeContext.Provider>;
};

const useAppTheme = () => useContext(AppThemeContext);

export { AppThemeContext, AppThemeProvider, useAppTheme };
