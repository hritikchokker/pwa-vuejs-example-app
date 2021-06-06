import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Navigation from "../components/Navigation.vue";
import LifecycleHooks from '../views/LifecycleHooks.vue';
import ShoppingList from '../views/ShoppingList.vue';
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/hooks',
    name: 'LifecycleHooks',
    component: LifecycleHooks
  },
  {
    path: '/shopping-list',
    name: 'ShoppingList',
    component: ShoppingList

  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
