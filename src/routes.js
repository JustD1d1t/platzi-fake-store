import { createWebHashHistory, createRouter } from "vue-router";
import IndexPage from "@/pages/index";
import Catalog from "@/pages/catalog/index";
import Product from "@/pages/product/index";
import basket from "@/pages/basket/index";
import favorite from "@/pages/favorite/index";
import user from "@/pages/user/index";
import login from "@/pages/user/login";
import register from "@/pages/user/register";
import password from "@/pages/user/password";
import account from "@/pages/user/account";
import favorites from "@/pages/user/favorites";
import orders from "@/pages/user/orders";

import auth from "./middleware/auth";
import isNotLoggedIn from "@/middleware/isNotLoggedIn";
import middlewarePipeline from "./middleware/middlewarePipeline";

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
    path: "/user",
    component: user,
    name: "user",
    redirect: "/user/account",
    children: [
      {
        path: "/user/account",
        name: "account",
        component: account,
        meta: {
          middleware: [auth],
        },
      },
      {
        path: "/user/password",
        name: "password",
        component: password,
        meta: {
          middleware: [auth],
        },
      },
      {
        path: "/user/favorites",
        name: "favorites",
        component: favorites,
        meta: {
          middleware: [auth],
        },
      },
      {
        path: "/user/orders",
        name: "orders",
        component: orders,
        meta: {
          middleware: [auth],
        },
      },
    ],
    meta: {
      middleware: [auth],
    },
  },
  {
    path: "/login",
    name: "login",
    component: login,
    meta: {
      middleware: [isNotLoggedIn],
    },
  },
  {
    path: "/register",
    name: "register",
    component: register,
    meta: {
      middleware: [isNotLoggedIn],
    },
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
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    next,
  };
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});
export default router;
