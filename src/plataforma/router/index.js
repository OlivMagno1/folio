import { createWebHistory, createRouter } from "vue-router";
import TremView from "@/plataforma/views/TremView.vue";
import HomeView from "@/plataforma/views/HomeView.vue";
import AvioesView from "@/plataforma/views/AvioesView.vue";
import OnibusView from "@/plataforma/views/OnibusView.vue";

const routes = [
  {
    path: "/plataforma",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/plataforma/trens",
    name: "Trens",
    component: TremView,
  },
  {
    path: "/plataforma/avioes",
    name: "Aviões",
    component: AvioesView,
  },
  {
    path: "/plataforma/onibus",
    name: "Ônibus",
    component: OnibusView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
