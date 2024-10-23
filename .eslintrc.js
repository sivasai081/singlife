module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "no-undef": 0,
    "react/no-children-prop": 0,
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react/display-name": 0,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
