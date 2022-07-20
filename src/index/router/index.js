import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "@/index/views/AboutMe.vue";
import PortfolioCarousel from "@/index/views/PortfolioCarousel.vue";
import SkillsView from "@/index/views/SkillsView.vue";

const routes = [
  {
    path: "/index/",
    name: "aboutme",
    component: AboutMe,
  },
  {
    path: "/index/folio",
    name: "folio",
    component: PortfolioCarousel,
  },
  {
    path: "/index/skills",
    name: "skills",
    component: SkillsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
