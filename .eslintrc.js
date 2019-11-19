module.exports = {
  extends: ['eslint-config-airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    // Transpiled packages will want to override this to "module"
    sourceType: 'script'
  },
  rules: {
    strict: ['error', 'global']
  }
}
