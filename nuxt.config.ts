// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxt/image", "component-library/nuxt", "@nuxt/content"],
  css: ["@/assets/rivet.css", "@/assets/main.scss"],
  vite: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("rvt-icon"),
        },
      },
    },
  },
  components: true,
  devtools: { enabled: true },
});
