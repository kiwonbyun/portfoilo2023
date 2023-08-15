module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['plugin:@typescript-eslint/recommended', 'next', 'prettier'],
  rules: {
    // 여기에 규칙을 추가하거나 수정할 수 있습니다.
    'no-console': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1, // 최대 1개의 연속된 빈 줄 허용
        maxBOF: 0, // 파일 시작 부분에 빈 줄 허용하지 않음
        maxEOF: 0, // 파일 끝 부분에 빈 줄 허용하지 않음
      },
    ],
  },
};
