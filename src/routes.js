import { createWebHashHistory, createRouter } from "vue-router";
import IndexPage from "@/pages/index";
import Catalog from "@/pages/catalog/index";
import Product from "@/pages/product/index";
import basket from "@/pages/basket/index";
import favorite from "@/pages/favorite/index";

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
    path: "/basket",
    component: basket,
  },
  {
    path: "/product/:id",
    component: Product,
  },
  {
    path: "/favorite",
    component: favorite,
  },
  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    redirect: "/",
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
