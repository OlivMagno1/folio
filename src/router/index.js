import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "@/views/AboutMe.vue";
import PortfolioCarousel from "@/views/PortfolioCarousel.vue";

const routes = [
  {
    path: "/",
    name: "aboutme",
    component: AboutMe,
  },
  {
    path: "/folio",
    name: "folio",
    component: PortfolioCarousel,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
