export default {
  root: true,
  extends: ['@phaier/eslint-config-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },

  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.ts', '**/vite.config.ts'], optionalDependencies: false, peerDependencies: false },
    ],
  },

  ignorePatterns: ['node_modules/'],
};
