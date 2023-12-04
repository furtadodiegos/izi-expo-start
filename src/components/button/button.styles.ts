import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import type { TouchableOpacityProps } from 'react-native';

import type { Colors } from '@/theme';

type StyledButtonProps = TouchableOpacityProps & {
  backgroundColor?: keyof Colors;
};

export const StyledButton = styled(TouchableOpacity)<StyledButtonProps>`
  ${({ theme: { colors }, backgroundColor = 'primary' }) => css`
    background-color: ${colors[backgroundColor]};
  `}
`;
