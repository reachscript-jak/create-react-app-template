module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'simple-import-sort',
    'sort-keys-fix',
    'sort-destructure-keys',
    'typescript-sort-keys',
    'import',
    'unused-imports',
  ],
  rules: {
    '@typescript-eslint/array-type': ['error', { prefer: 'array-simple' }],
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'sort-keys-fix/sort-keys-fix': 'warn',
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'typescript-sort-keys/interface': 'warn',
    'typescript-sort-keys/string-enum': 'warn',
    'import/newline-after-import': 'error',
    'unused-imports/no-unused-imports': 'warn',
    'no-restricted-imports': ['error', { patterns: ['.*'] }],
    'no-throw-literal': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'typeAlias',
        'format': ['PascalCase'],
        'custom': {
          'regex': '^.*Type$',
          'match': true,
        },
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'has', 'can'],
        filter: { regex: '^_', match: false },
      },
    ],
  },
  overrides: [
    {
      files: ['.eslintrc.js'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'off',
      },
    },
  ],
}
