import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // Base recommended config
  js.configs.recommended,

  // Ignore patterns (from .eslintignore)
  {
    ignores: [
      "babel.config.js",
      "webpack.config.js",
      "webpack.common.js",
      "webpack.dev.js",
      "webpack.prod.js",
      "node_modules/",
      "dist/",
      "build/",
      ".prettierrc.json",
      ".eslintrc.json",
      "env.d.ts",
      "svgr.config.js",
    ],
  },

  // Configuration for all JS/TS files
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        // Tells eslint-plugin-react to automatically detect the version of React to use.
        version: "detect",
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      // Tells eslint how to resolve imports
      "import/resolver": {
        node: {
          paths: ["src"],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        typescript: {
          project: "@stellar/*/tsconfig.json",
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: react,
      "react-hooks": reactHooks,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      // TypeScript recommended rules
      ...tseslint.configs.recommended.rules,

      // React recommended rules
      ...react.configs.recommended.rules,
      // React v17+ doesn't need to have React imported in every file, it works globally.
      ...react.configs["jsx-runtime"].rules,

      // React Hooks recommended rules
      ...reactHooks.configs.recommended.rules,

      // Import recommended rules
      ...importPlugin.configs.recommended.rules,

      // JSX A11y recommended rules
      ...jsxA11y.configs.recommended.rules,

      // Custom rule overrides
      "@typescript-eslint/ban-ts-comment": [
        "error",
        { "ts-ignore": "allow-with-description" },
      ],
      // TODO: ideally, these should be removed
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/interactive-supports-focus": "off",
      "react/prop-types": "off",
      "react/jsx-key": "off",
      "react/no-unescaped-entities": "off",
      "import/named": "off",
    },
  },

  // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
  // Make sure it's always the last config, so it gets the chance to override other configs.
  eslintConfigPrettier,
];
