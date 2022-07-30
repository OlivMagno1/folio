import { createRouter, createWebHistory } from "vue-router";
import CafeView from "@/cafe/views/CafeView.vue";
import ExpressoView from "@/cafe/views/ExpressoView.vue";
import FrappuccinoView from "@/cafe/views/FrappuccinoView.vue";
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
    path: "/cafe/frappuccino",
    name: "frappuccino",
    component: FrappuccinoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
