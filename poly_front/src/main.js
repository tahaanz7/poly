import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";
import "./assets/styles/variables.css";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";



createApp(App)
  .use(router)
  .use(MotionPlugin)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .mount("#app");
