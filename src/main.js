import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//import { createI18n } from "vue-i18n";

import { setupI18n } from "./i18n";

const i18n = setupI18n({
  globalInjection: true,
  legacy: false,
  locale: "pt",
  fallbackLocale: "en",
  messages: {
    pt: require("./locales/pt.json"),
    en: require("./locales/en.json"),
  },
});

/*const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "pt",
  fallbackLocale: "en",
  messages: {
    pt: require("./locales/pt.json"),
    en: require("./locales/en.json"),
  },
});*/

createApp(App).use(store).use(router).use(i18n).mount("#app");
