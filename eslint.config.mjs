import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser"; // Required parser for TypeScript
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  ignorePatterns: ["next.config.js"],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: tsParser, // Set the TypeScript parser
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true, // Enable JSX support
    },
  },
  plugins: ["react", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // Disable for React 17+
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
};

export default config;
