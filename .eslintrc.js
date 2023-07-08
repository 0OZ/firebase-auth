module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    node: true,
  },
  ignorePatterns: ['**/node_modules', '**/dist', '**/build'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,
    },
    ecmaVersion: 'latest',
    project: ['tsconfig.json'],
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json'],
      },
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'sonarjs/no-nested-template-literals': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['private-constructors'] },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['function'],
        format: ['camelCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: ['enum', 'enumMember'],
        format: ['PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'classProperty',
        format: ['camelCase'],
      },
      {
        selector: 'objectLiteralProperty',
        format: [
          'camelCase',
          // Some external libraries use snake_case for params
          'snake_case',
          // Env variables are generally uppercase
          'UPPER_CASE',
        ],
      },
      {
        selector: ['typeAlias', 'interface'],
        format: ['PascalCase'],
      },
      {
        selector: ['typeProperty'],
        format: ['camelCase'],
      },
      {
        selector: ['typeParameter'],
        format: ['PascalCase'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: ['variable', 'function'],
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: 'parameter',
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
      },
    },
    {
      files: ['*.js'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 'latest',
      },
      rules: {
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-all-duplicated-branches': 'off',
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        'import/order': 'off',
      },
    },
  ],
}
