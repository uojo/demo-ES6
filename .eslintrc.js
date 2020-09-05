// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  env: {
    // node: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // plugins: [],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    // 'arrow-parens': 0,
    // allow async-await
    // 'generator-star-spacing': 0,
    // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'comma-dangle': ['error', 'only-multiline'],
    'no-constant-condition': 0,
    'no-lone-blocks': 0,
    'no-proto': 0,
    'no-unused-vars': 0,
    'import/no-duplicates': 0,
    'no-empty-pattern': 0，
    'new-cap': 0,
    'no-new': 0,
    'no-redeclare': 0,
    // 'no-undef':0,
    'standard/no-callback-literal': 0,
    'one-var': 0
  }
}
