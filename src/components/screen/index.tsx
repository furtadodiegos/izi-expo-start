import React, { useMemo } from 'react';
import { KeyboardAvoidingView, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { FC } from 'react';
import type { StatusBarStyle, ViewProps } from 'react-native';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';

import { useAppTheme } from '@/context';
import { mergeClassNames } from '@/utils';
import type { CustomColors } from '@/types';

type AppScreenProps = ViewProps &
  Pick<SafeAreaViewProps, 'edges'> & {
    customBarStyle?: StatusBarStyle;
    bgColor?: keyof CustomColors;
  };

const { container } = StyleSheet.create({ container: { flex: 1 } });

const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

/**
 * AppScreen component.
 *
 * @component
 * @param {AppScreenProps} props - The props for the component.
 * @param {ReactNode} props.children - The children elements.
 * @param {string[]} [props.edges=[]] - The edges for SafeAreaView.
 * @param {string} [props.customBarStyle] - The custom bar style for StatusBar.
 * @param {string} [props.bgColor] - The background color for the component.
 * @param {string} [props.className] - The additional class name for the component.
 * @returns {JSX.Element} The rendered AppScreen component.
 */
const AppScreen: FC<AppScreenProps> = ({ children, edges = [], customBarStyle, bgColor, className, ...rest }) => {
  const { currentTheme } = useAppTheme();

  const { barStyle = 'light-content' } = useMemo(
    () => ({ barStyle: customBarStyle || currentTheme === 'dark' ? 'dark-content' : 'light-content' }),
    [currentTheme, customBarStyle],
  );

  const baseClassName = useMemo(() => `flex-1 bg-${bgColor || 'primary'} dark:bg-${bgColor || 'slate-600'}`, [bgColor]);

  const mergedClassName = useMemo(() => mergeClassNames(baseClassName, className), [baseClassName, className]);

  return (
    <View className={baseClassName}>
      <StatusBar barStyle={barStyle} />

      <SafeAreaView edges={edges} style={container}>
        <KeyboardAvoidingView behavior={behavior} className={mergedClassName}>
          <View className={mergedClassName} {...rest}>
            {children}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default AppScreen;
