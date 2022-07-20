import { createWebHistory, createRouter } from "vue-router";
import TremView from "@/views/TremView.vue"
import HomeView from "@/views/HomeView.vue";
import AvioesView from "@/views/AvioesView.vue";
import OnibusView from "@/views/OnibusView.vue";


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