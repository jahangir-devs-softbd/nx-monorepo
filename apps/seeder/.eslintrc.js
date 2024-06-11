module.exports = {
  rules: {
    "@typescript-eslint/no-restricted-imports": [
      "error",
      {
        patterns: ["./**/*", "../**/*"],
      },
    ],
  },
};
