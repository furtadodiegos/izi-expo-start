import React from 'react';
import { Text } from 'react-native';
import type { FC } from 'react';
import type { TouchableOpacityProps } from 'react-native';

import { StyledButton } from './button.styles';

type AppButtonProps = TouchableOpacityProps & {
  title?: string;
};

const AppButton: FC<AppButtonProps> = ({ title, children, ...rest }) => (
  <StyledButton {...rest}>{children || <Text>{title}</Text>}</StyledButton>
);

export default AppButton;
