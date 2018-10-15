module.exports = {
  plugins: [
    'eslint-plugin-vue'
  ],
  extends: [
    'plugin:vue/recommended'
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
