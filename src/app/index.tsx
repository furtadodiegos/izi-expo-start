import React from 'react';
import { Text } from 'react-native';
import type { FC } from 'react';

import { AppButton, AppScreen } from '@/components';

const App: FC = () => {
  return (
    <AppScreen edges={['top']} testID="homeScreen">
      <Text>XXX</Text>

      <AppButton className="m-2" txClassName="text-white">
        XXX2
      </AppButton>
    </AppScreen>
  );
};

export default App;
