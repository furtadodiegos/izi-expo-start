import type { ExpoConfig } from '@expo/config';

const BUNDLE_ID = 'com.dfti.startizi';

export default (): ExpoConfig => ({
  name: 'startizi',
  slug: 'startizi',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  experiments: {
    tsconfigPaths: true,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: BUNDLE_ID,
    entitlements: {
      'com.apple.developer.networking.wifi-info': true,
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: BUNDLE_ID,
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    eas: {
      projectId: '8eaac3d9-dee7-4ec0-abcf-f37881940023',
    },
  },
});
