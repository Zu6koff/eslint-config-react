module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:import/recommended"
  ],
  plugins: [
    "@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "no-param-reassign": "off",
    "consistent-return": "off",
    "arrow-body-style": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/require-default-props": "off",
    "react/button-has-type": "off",
    "react/function-component-definition": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/interactive-supports-focus": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-irregular-whitespace": "off",
    "no-void": "off"
  }
}
