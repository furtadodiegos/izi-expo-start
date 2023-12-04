module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:import/typescript', 'airbnb-typescript-prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@typescript-eslint/eslint-plugin', 'simple-import-sort', 'react-native'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'import/no-named-default': 'off',
    'react/function-component-definition': 'off',
    'react/no-unstable-nested-components': 'off',
    'import/no-unresolved': 'off',
    'global-require': 'off',
    camelcase: 'off',
    'import/extensions': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react-native/no-inline-styles': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',

    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^@?\\w', '^@?\\w.*\\u0000$'],
          ['(?<!\\u0000)$', '(?<=\\u0000)$'],
          ['^\\.', '^\\..*\\u0000$'],
        ],
      },
    ],
  },
  ignorePatterns: ['__tests__/**/*.tsx', '__coverage__/**/*.js', 'jest.config.ts', 'tsconfig.json'],
};
