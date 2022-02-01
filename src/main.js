import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import router from "./router.js";
import store from "./store.js";
import { addIcons, OhVueIcon } from "oh-vue-icons";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  HiSun,
  SiDeno,
  HiMoon,
  CoFork,
  FaStar,
  OiIssueOpened,
  FaGlobeAmericas 
} from "oh-vue-icons/icons";

addIcons(SiDeno, FaGithub, FaStackOverflow, FaLinkedin, HiSun, HiMoon, CoFork, FaStar, OiIssueOpened, FaGlobeAmericas  );

const app = createApp(App);
app.component("Icon", OhVueIcon);
app.use(router);
app.use(store);
app.mount("#app");
