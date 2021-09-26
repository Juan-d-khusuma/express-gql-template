module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["google", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  ignorePatterns: ["**/**/*.test.ts"],
  plugins: ["@typescript-eslint"],
  rules: {},
};
