module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    semi: [
      'error',
      'always',
      {
        omitLastInOneLineBlock: false,
      } /*правило выдает ошибку при остутсвтии точки с запятой*/,
    ],
    'comma-dangle': ['error', 'never' /*правило контролирует висящую запятую*/],
    quotes: ['error', 'single'/*правило контролирует кавычки*/],
  },
};
