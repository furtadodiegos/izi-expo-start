import { act, render } from '@tests/helpers';
import React from 'react';
import { Text } from 'react-native';

import AppScreen from '.';

describe('AppScreen', () => {
  it('renders the children components', async () => {
    const { getByText } = render(
      <AppScreen>
        <Text>Child Component</Text>
      </AppScreen>,
    );

    await act(() => {
      expect(getByText('Child Component')).toBeTruthy();
    });
  });

  it('sets the background color', async () => {
    const { getByTestId /* , debug */ } = render(
      <AppScreen testID="app.screen">
        <Text>Child Component</Text>
      </AppScreen>,
    );

    await act(() => {
      const screen = getByTestId('app.screen');

      // debug(screen);

      expect(screen).toBeTruthy();
      expect(screen).toHaveProp('className', 'flex-1 bg-primary dark:bg-slate-600');
      // expect(screen).toHaveStyle({ backgroundColor: '#C19A6B' });
    });
  });

  it('set a different background color', async () => {
    const { getByTestId } = render(
      <AppScreen bgColor="secondary" testID="app.screen">
        <Text>Child Component</Text>
      </AppScreen>,
    );

    await act(() => {
      const screen = getByTestId('app.screen');

      expect(screen).toHaveTextContent('Child Component');
      expect(screen).toHaveProp('className', 'flex-1 bg-secondary dark:bg-secondary');
    });
  });

  it('set a className should concat with the others className props and should not contain duplicate values', async () => {
    const { getByTestId } = render(
      <AppScreen className="flex-1 p-2" testID="app.screen">
        <Text>Child Component</Text>
      </AppScreen>,
    );

    await act(() => {
      const screen = getByTestId('app.screen');

      expect(screen).toHaveProp('className', 'flex-1 bg-primary dark:bg-slate-600 p-2');
    });
  });
});
