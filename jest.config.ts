export default {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{ts, tsx, js, jsx}'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  preset: 'jest-expo',
  setupFilesAfterEnv: ['./__tests__/index.ts'],
  testEnvironment: 'jsdom',
  testRegex: '(\\.|/)test\\.(ts|tsx|js|jsx)$',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  verbose: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@tests/(.*)$': '<rootDir>/__tests__/$1',
  },
};
