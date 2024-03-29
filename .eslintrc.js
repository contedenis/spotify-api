module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "import/prefer-default-export": 0,
    "no-shadow": 0,
    "jsx-a11y/mouse-events-have-key-events": 0,
    "react-hooks/exhaustive-deps": 0
  },
  settings: {
    "import/resolver": {
      "node": {
        "paths": ["src"],
      },
    },
  },
};
