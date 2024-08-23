import { act, fireEvent, render } from '@tests/helpers';
import React from 'react';
import { Text } from 'react-native';

import AppButton from '.';

describe('AppButton', () => {
  it('renders the button with the provided children text', async () => {
    const { getByText } = render(<AppButton>Hello world!</AppButton>);

    await act(async () => {
      expect(getByText('Hello world!')).toBeTruthy();
    });
  });

  it('renders the button with the provided children', async () => {
    const { getByText, getByTestId } = render(
      <AppButton>
        <Text testID="button.children">Custom Button</Text>
      </AppButton>,
    );

    await act(async () => {
      expect(getByText('Custom Button')).toBeTruthy();
      expect(getByTestId('button.children')).toBeTruthy();
    });
  });

  it('calls the onPress function when the button is pressed', async () => {
    const onPressMock = jest.fn();

    const { getByText } = render(<AppButton onPress={onPressMock}>Click me</AppButton>);

    await act(async () => {
      fireEvent.press(getByText('Click me'));

      expect(onPressMock).toHaveBeenCalled();
    });
  });
});
