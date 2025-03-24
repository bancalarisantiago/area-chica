module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "prettier", "standard"],
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    quotes: [2, "single"],
    "linebreak-style": [2, "unix"],
    semi: [2, "always"],
    "prettier/prettier": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "alphabetize": { "order": "asc", "caseInsensitive": true }
      }
    ],
    "react/no-inline-styles": "on",
    "react-native/no-inline-styles": "on",
    "react-native/no-color-literals": "on",
    "import/prefer-default-export": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // TypeScript-specific overrides
      rules: {
        "react/prop-types": "off" // Disable PropTypes for TS files (since we use TypeScript interfaces)
      }
    }
  ]
};
