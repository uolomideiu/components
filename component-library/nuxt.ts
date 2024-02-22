import { createResolver, defineNuxtModule, addPlugin } from "@nuxt/kit";

export default defineNuxtModule({
  hooks: {
    "components:dirs": (dirs) => {
      const { resolve } = createResolver(import.meta.url);
      dirs.push({
        path: resolve("./components"),
        pathPrefix: false,
      });
    },
  },
  setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    nuxt.options.css.push(resolve("./assets/rivet.css"));
    nuxt.options.css.push(resolve("./assets/main.scss"));

    addPlugin({
      src: resolve("./plugins/rivet-client.js"),
      mode: "client",
    });

    addPlugin({
      src: resolve("./plugins/icons.js"),
      mode: "client",
    });
  },
});
