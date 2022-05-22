import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import CategoriesPage from "./pages/CategoriesPage.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/:categories",
      name: "categories",
      component: CategoriesPage,
      props: true,
    },
  ],
});

app.use(router);
app.mount("#app");
