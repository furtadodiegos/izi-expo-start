import { KeyboardAvoidingView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';
import type { ViewProps } from 'react-native';

import type { Colors } from '@/theme';

export type StyledViewProps = ViewProps & {
  backgroundColor?: keyof Colors;
};

export const StyledSafeAreaView = styled(SafeAreaView)<StyledViewProps>`
  ${({ theme: { colors }, backgroundColor = 'background' }) => css`
    flex: 1;
    background-color: ${colors[backgroundColor]};
  `}
`;

export const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView)`
  flex: 1;
`;

export const StyledView = styled(View)`
  ${() => css`
    flex: 1;
    justify-content: flex-start;
  `}
`;
