import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxtjs/i18n"],

  i18n: {
    defaultLocale: "nl",

    locales: [
      {
        code: "nl",
        name: "Nederlands",
        file: "nl.json",
      },
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
    ],

    langDir: "locales",
    strategy: "prefix_except_default",
  },
});
