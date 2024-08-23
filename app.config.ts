import type { ExpoConfig } from '@expo/config';

const { BUNDLE_ID, PROJECT_ID, OWNER, NAME = '', SLUG = '', SCHEME = '' } = process.env;

export default (): ExpoConfig => ({
  name: NAME,
  slug: SLUG,
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  scheme: SCHEME,
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
  owner: OWNER,
  extra: {
    eas: {
      projectId: PROJECT_ID,
    },
  },
  plugins: [['expo-router'], ['expo-font']],
});
