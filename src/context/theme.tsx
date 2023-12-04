import React, { createContext, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import type { FC, PropsWithChildren } from 'react';

import { darkTheme, lightTheme } from '@/theme';

type AppThemeContextProps = {
  currentTheme: 'light' | 'dark';
  toggleTheme: () => void;
};

const AppThemeContext = createContext({} as AppThemeContextProps);

const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(useColorScheme() || 'light');

  const toggleTheme = () => setCurrentTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));

  const value = useMemo(
    () => ({
      currentTheme,
      toggleTheme,
    }),
    [currentTheme],
  );

  return (
    <AppThemeContext.Provider value={value}>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};

const useAppTheme = () => useContext(AppThemeContext);

export { AppThemeContext, AppThemeProvider, useAppTheme };
