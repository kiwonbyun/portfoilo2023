module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['plugin:@typescript-eslint/recommended', 'next', 'prettier'],
  rules: {
    // 여기에 규칙을 추가하거나 수정할 수 있습니다.
    'no-console': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
};
