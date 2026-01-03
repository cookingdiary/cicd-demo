import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        process: "readonly",
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules, // ✨ 核心：继承 React 的推荐规则
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "error",
      // ✨ 关键规则：防止 React 变量被误判为未使用
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",       // 有未使用的变量直接报错
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];