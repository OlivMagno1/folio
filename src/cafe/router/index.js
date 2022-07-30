import { createRouter, createWebHistory } from "vue-router";
import CafeView from "@/cafe/views/CafeView.vue";
import ExpressoView from "@/cafe/views/ExpressoView.vue";
import FrapuccinoView from "@/cafe/views/FrapuccinoView.vue";
import LatteView from "@/cafe/views/LatteView.vue";
import AboutCafe from "@/cafe/views/AboutCafe.vue";

const routes = [
  {
    path: "/cafe/",
    name: "tour",
    component: CafeView,
  },
  {
    path: "/aboutcafe/",
    name: "about",
    component: AboutCafe,
  },
  {
    path: "/cafe/expresso",
    name: "expresso",
    component: ExpressoView,
  },
  {
    path: "/cafe/latte",
    name: "latte",
    component: LatteView,
  },
  {
    path: "/cafe/frapuccino",
    name: "frapuccino",
    component: FrapuccinoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
