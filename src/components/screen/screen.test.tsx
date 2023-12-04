import { render } from '@tests/helpers';
import React from 'react';
import { Text } from 'react-native';

import { lightTheme } from '@/theme';

import AppScreen from './screen.component';

describe('AppScreen', () => {
  it('renders the children components', () => {
    const { getByText } = render(
      <AppScreen>
        <Text>Child Component</Text>
      </AppScreen>,
    );

    expect(getByText('Child Component')).toBeTruthy();
  });

  it('sets the background color', () => {
    const { getByTestId } = render(
      <AppScreen backgroundColor="card" testID="app.screen">
        <Text>Child Component</Text>
      </AppScreen>,
    );

    const screen = getByTestId('app.screen');

    expect(screen).toBeTruthy();
    expect(screen).toHaveStyle({ backgroundColor: lightTheme.colors.card });
  });

  it('sets the status bar style', () => {
    const { getByTestId } = render(
      <AppScreen barStyle="dark-content">
        <Text testID="app.screen.children">Child Component</Text>
      </AppScreen>,
    );

    expect(getByTestId('app.screen.children')).toBeTruthy();
    expect(getByTestId('app.screen.children')).toHaveTextContent('Child Component');
  });
});
