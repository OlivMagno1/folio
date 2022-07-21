import { createRouter, createWebHistory } from "vue-router";
import CafeView from "@/cafe/views/CafeView.vue";
import ExpressoView from "@/cafe/views/ExpressoView.vue";
import FrapuccinoView from "@/cafe/views/FrapuccinoView.vue";
import CapuccinoView from "@/cafe/views/CapuccinoView.vue";

const routes = [
  {
    path: "/cafe/",
    name: "tour",
    component: CafeView,
  },
  {
    path: "/cafe/expresso",
    name: "expresso",
    component: ExpressoView,
  },
  {
    path: "/cafe/capuccino",
    name: "capuccino",
    component: CapuccinoView,
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
