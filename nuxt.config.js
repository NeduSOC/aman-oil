// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibility: {
    compatibilityDate: "2025-05-05",
  },
  modules: ["@nuxtjs/tailwindcss"],
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
      autoprefixer: {},
    },
  },
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.cdnfonts.com/css/pp-neue-montreal", // Replace with the actual CDN link
      },
    ],
  },
});
