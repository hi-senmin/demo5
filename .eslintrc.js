module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: 'babel-eslint', // 解析一些最新的 es 语法
    sourceType: 'module'  // 模块为 ECMAScript 模块
  },
  extends: 'eslint:recommended',
  rules: {
    'indent': ['error', 2],
    'no-debugger': 'error', // 禁止在代码中使用 debugger
    'quotes': ['error', 'single'], // 单引号
    'semi': ['error', 'always'], // 代码需要以分号结尾

    'no-alert':  process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};