import type { Theme } from '@react-navigation/native';

import darkTheme from './dark';
import lightTheme from './light';

type Colors = Theme['colors'] & {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  caption: string;
  error: string;
  background: string;
  card: string;
  border: string;
  overlay20: string;
  overlay50: string;
  overlay80: string;
  notification: string;
};

export { lightTheme, darkTheme, type Colors };
