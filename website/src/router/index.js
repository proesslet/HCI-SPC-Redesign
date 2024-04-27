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
      path: "/forecast-tools",
      name: "forecast-tools",
      component: () => import("../views/ForecastTools.vue"),
    },
    {
      path: "/weather-safety",
      name: "weather-safety",
      component: () => import("../views/WeatherSafety.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/md",
      name: "md",
      component: () => import("../views/MDPage.vue"),
    },
    {
      path: "/watches",
      name: "watches",
      component: () => import("../views/Watches.vue"),
    },
    {
      path: "/thunderstorm-outlooks",
      name: "thunderstorm-outlooks",
      component: () => import("../views/ThunderStormOutlooks.vue"),
    },
    {
      path: "/fire-weather",
      name: "fire-weather",
      component: () => import("../views/FireWeather.vue"),
    },
  ],
});

export default router;
