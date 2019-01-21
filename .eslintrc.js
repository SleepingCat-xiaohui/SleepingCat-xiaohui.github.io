module.exports = {
  "extends": ["standard", "plugin:vue/recommended"],
  "plugins": ["vue"],
  "rules": {
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      { ignores: [] }
    ],
    "vue/html-closing-bracket-newline": ["error", {
      singleline: "never",
      multiline: "never"
    }],
    "vue/max-attributes-per-line": ["error", {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: true
      }
    }],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore"
    }]
  }
};