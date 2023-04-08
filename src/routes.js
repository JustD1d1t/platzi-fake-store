import { createWebHistory, createRouter } from "vue-router";
import IndexPage from "@/pages/index";
import Category from "@/pages/category/index";

const routes = [
  {
    path: "/",
    component: IndexPage,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    redirect: "/",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
