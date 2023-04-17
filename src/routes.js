import { createWebHistory, createRouter } from "vue-router";
import IndexPage from "@/pages/index";
import Catalog from "@/pages/catalog/index";
import Product from "@/pages/product/index";

const routes = [
  {
    path: "/",
    component: IndexPage,
  },
  {
    path: "/catalog",
    component: Catalog,
  },
  {
    path: "/product/:id",
    component: Product,
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
