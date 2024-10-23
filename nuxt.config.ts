import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import type { LocaleObject } from "@nuxtjs/i18n";

const locales: LocaleObject[] = [
  { code: "en-US", name: "English", file: "content/en-US/translation.json" },
  { code: "ne-NP", name: "Nepali", file: "content/ne-NP/translation.json" }
];

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  future: {
    compatibilityVersion: 4
  },

  devServer: {
    host: "0.0.0.0"
  },

  components: {
    dirs: [{ path: "components", pathPrefix: false }]
  },

  vite: {
    plugins: [tailwindcss()]
  },

  modules: [
    // for ui
    "@nuxt/icon",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",

    // for content
    "@nuxtjs/i18n",
    "@nuxt/content",
    "nuxt-graphql-client",

    // for toolings
    "@nuxt/eslint",
    "@nuxthq/studio"
  ],

  icon: {
    mode: "svg",
    customCollections: [{ dir: "app/assets/icons", prefix: "local" }]
  },

  colorMode: {
    classSuffix: "",
    disableTransition: true
  },

  i18n: {
    locales,
    strategy: "no_prefix",
    defaultLocale: "en-US",
    detectBrowserLanguage: {
      useCookie: true
    }
  },
  content: {
    ignores: ["translation.json"],
    sources: {
      content: {
        driver: "fs",
        base: resolve(__dirname, "app/content")
      }
    },
    locales: locales.map((l) => l.code)
  }
});
