import { fireEvent, render } from '@tests/helpers';
import React from 'react';
import { Text } from 'react-native';

import { lightTheme } from '@/theme';

import AppButton from './button.component';

describe('AppButton', () => {
  it('renders the button with the provided title', () => {
    const { getByText } = render(<AppButton title="Click me" />);

    expect(getByText('Click me')).toBeTruthy();
  });

  it.only('renders the button with the provided children', () => {
    const { getByText, getByTestId } = render(
      <AppButton>
        <Text testID="button.children">Custom Button</Text>
      </AppButton>,
    );

    expect(getByText('Custom Button')).toBeTruthy();
    expect(getByTestId('button.children')).toBeTruthy();
  });

  it('calls the onPress function when the button is pressed', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(<AppButton title="Click me" onPress={onPressMock} />);

    fireEvent.press(getByText('Click me'));

    expect(onPressMock).toHaveBeenCalled();
  });

  it.only('renders the button with the right style', () => {
    const { getByTestId } = render(<AppButton testID="app.button" title="Click me" />);

    const btn = getByTestId('app.button');

    expect(btn).toHaveStyle({ backgroundColor: lightTheme.colors.primary });
  });
});
