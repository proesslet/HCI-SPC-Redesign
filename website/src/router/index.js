import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/SPCProducts.vue"),
    },
    {
      path: "/forecast-tools",
      name: "forecast-tools",
      component: () => import("../views/ForecastTools.vue"),
    },
    {
      path: "/weather-safety",
      name: "weather-safety",
      component: () => import("../views/WeatherSafety.vue"),
    },
  ],
});

export default router;
