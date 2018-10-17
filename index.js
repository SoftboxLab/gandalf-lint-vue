module.exports = {
  extends: [
    'plugin:vue/recommended',
    'eslint-config-gandalf-lint',
  ].map(require.resolve),
  plugins: [
    'eslint-plugin-vue'
  ],
  parserOptions: {
    'parser': 'babel-eslint',
  },
  rules: {
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
      }
    }],
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: [
          'transition',
          'transition-group',
          'component',
          'keep-alive'
        ]
      }
    ]
  }
}
