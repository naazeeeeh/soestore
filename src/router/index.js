import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import CartView from "../views/CartView.vue";
import SuccessView from "../views/SuccessView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product",
    name: "product",
    component: ProductView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/success",
    name: "success",
    component: SuccessView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  // import(/* webpackChunkName: "about" */ "../views/about.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
