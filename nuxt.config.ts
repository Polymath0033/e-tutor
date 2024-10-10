// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["./assets/css/main.css"],
  supabase: {
    redirect: false,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    autoImport: true,
  },

  modules: ["@nuxtjs/supabase", "@pinia/nuxt", "@nuxt/icon"],
});