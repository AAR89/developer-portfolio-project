import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createMemoryHistory, createRouter } from "vue-router";

import Main from "./components/Main.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Stack from "./components/Stack.vue";
import Projects from "./components/Projects.vue";

const routes = [
  { path: "/", component: Header },
  { path: "/about", component: Main },
  { path: "/stack", component: Stack },
  { path: "/projects", component: Projects },
  { path: "/contacts", component: Footer },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
