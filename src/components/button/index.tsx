import React, { useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { FC } from 'react';
import type { TouchableOpacityProps } from 'react-native';

import { mergeClassNames } from '@/utils';

type AppButtonProps = TouchableOpacityProps & {
  text?: string;
  txClassName?: string;
};

const baseClassName = {
  button: 'rounded-3xl min-w-4 min-h-4 justify-center items-center p-2 bg-secondary dark:bg-secondary',
  text: 'font-bold text-lg text-red-600 dark:text-red-600',
};

const AppButton: FC<AppButtonProps> = ({ text, children, className, txClassName, ...rest }) => {
  const { mergedButtonClassName, mergedTextClassName } = useMemo(
    () => ({
      mergedButtonClassName: mergeClassNames(baseClassName.button, className),
      mergedTextClassName: mergeClassNames(baseClassName.text, txClassName),
    }),
    [className, txClassName],
  );

  return (
    <TouchableOpacity className={mergedButtonClassName} {...rest}>
      {typeof children !== 'string' ? children : <Text className={mergedTextClassName}>{children || text}</Text>}
    </TouchableOpacity>
  );
};

export default AppButton;
