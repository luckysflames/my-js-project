// eslint.config.cjs   ← именно .cjs !!!
const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  // Рекомендованные правила ESLint
  js.configs.recommended,

  // Окружение Node.js + Jest
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      },
      ecmaVersion: 2022,
      sourceType: "commonjs"
    }
  },

  // Ваши правила
  {
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  },

  // Игнорировать папки
  {
    ignores: ["node_modules/", "coverage/", "dist/"]
  }
];