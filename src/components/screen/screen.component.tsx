import React from 'react';
import { Platform, StatusBar } from 'react-native';
import type { FC } from 'react';
import type { StatusBarStyle } from 'react-native';
import type { Edge } from 'react-native-safe-area-context';

import { StyledKeyboardAvoidingView, StyledSafeAreaView, StyledView } from './screen.styles';
import type { StyledViewProps } from './screen.styles';

type AppScreenProps = StyledViewProps & {
  edges?: Edge[];
  // keyboardOffset?: number;
  barStyle?: StatusBarStyle;
};

const AppScreen: FC<AppScreenProps> = ({ edges, barStyle, style, children, ...rest }) => {
  return (
    <StyledSafeAreaView edges={edges} {...rest}>
      <StatusBar barStyle={barStyle} />

      <StyledKeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // keyboardVerticalOffset={keyboardOffset}
      >
        <StyledView style={style}>{children}</StyledView>
      </StyledKeyboardAvoidingView>
    </StyledSafeAreaView>
  );
};

export default AppScreen;
