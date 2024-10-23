// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import pluginPrettier from "eslint-plugin-prettier/recommended";

export default withNuxt([pluginPrettier]).overrideRules({
  // vue related
  "vue/no-v-html": "off",
  "vue/html-self-closing": "off",
  "vue/no-multiple-template-root": "off",

  // typescript related
  "@typescript-eslint/ban-ts-comment": "off",
  "@typescript-eslint/no-explicit-any": "off"
});
