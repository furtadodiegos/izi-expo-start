import 'styled-components/native';

import type { Colors } from './src/theme';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    dark: boolean;
    colors: Colors;
  }
}
