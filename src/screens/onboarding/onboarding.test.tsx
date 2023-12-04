import { act, render, waitFor } from '@tests/helpers';
import React from 'react';

import OnboardingScreen from './onboarding.screen';

describe('OnboardingScreen', () => {
  it('renders the screen with correct text', async () => {
    const { getByText } = render(<OnboardingScreen />);

    await act(async () => {
      await waitFor(() => {
        expect(getByText('OnboardingScreen')).toBeTruthy();
      });
    });
  });
});
