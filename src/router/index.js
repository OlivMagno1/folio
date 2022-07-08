import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "@/views/AboutMe.vue";
import PortfolioCarousel from "@/views/PortfolioCarousel.vue";
import SkillsView from "@/views/SkillsView.vue";

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
  {
    path: "/skills",
    name: "skills",
    component: SkillsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
