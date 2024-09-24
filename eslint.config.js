import globals from "globals";

export default [
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  {
    rules: {
      semi: ["error", "always"]
    }
  }
];