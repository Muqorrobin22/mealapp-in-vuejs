import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import CategoriesPage from "./pages/CategoriesPage.vue";
import DetailPage from "./pages/DetailPage.vue";
import NotFound from "./pages/NotFound.vue";
import FirstPage from "./pages/FirstPage.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: FirstPage,
    },
    {
      path: "/foods",
      component: HomePage,
    },
    {
      path: "/:categories",
      name: "categories",
      component: CategoriesPage,
      props: true,
    },
    {
      path: "/:categories/:details",
      name: "details",
      component: DetailPage,
      props: true,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      top: 0,
      left: 0,
    };
  },
});

app.use(router);
app.mount("#app");
