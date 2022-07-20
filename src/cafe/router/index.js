import { createRouter, createWebHistory } from "vue-router";
import OverviewView from "@/cafe/views/OverviewView.vue";
import ExamplesView from "@/cafe/views/ExamplesView.vue";
import TourView from "@/cafe/views/TourView.vue";
import BlogView from "@/cafe/views/BlogView.vue";
import HelpView from "@/cafe/views/HelpView.vue";
import DownloadView from "@/cafe/views/DownloadView";

const routes = [
  {
    path: "/",
    name: "overview",
    component: OverviewView,
  },
  {
    path: "/examples",
    name: "examples",
    component: ExamplesView,
  },
  {
    path: "/tour",
    name: "tour",
    component: TourView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/help",
    name: "help",
    component: HelpView,
  },
  {
    path: "/download",
    name: "download",
    component: DownloadView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
