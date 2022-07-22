import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "@/index/views/AboutMe.vue";
import PortfolioCarousel from "@/index/views/PortfolioCarousel.vue";

const routes = [
  {
    path: "/",
    redirect: "index",
  },
  {
    path: "/index",
    name: "aboutme",
    component: AboutMe,
  },
  {
    path: "/index/folio",
    name: "folio",
    component: PortfolioCarousel,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
