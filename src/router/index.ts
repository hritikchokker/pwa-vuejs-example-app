import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Navigation from "../components/Navigation.vue";
import LifecycleHooks from '../views/LifecycleHooks.vue';
import ShoppingList from '../views/ShoppingList.vue';
import ComputedData from '../views/ComputedData.vue';
import Watchers from '../views/Watchers.vue';
import DataHandlingComparison from '../views/DataHandlingComparison.vue';
import BlogList from '../views/BlogList.vue'
import ComponentExample from '../views/ComponentExample.vue';
import CardWrapper from '../views/CardWrapper.vue';
import Filters from '../views/Filters.vue';
import ParentChild from '../views/ParentChild.vue';
import Refs from '../views/Refs.vue';
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
    path: '/component-example',
    name: 'ComponentExample',
    component: ComponentExample
  },
  {
    path: '/computed-data',
    name: 'ComputedData',
    component: ComputedData
  },
  {
    path: '/refs',
    name: 'Refs',
    component: Refs
  },
  {
    path: '/watchers',
    name: 'Watchers',
    component: Watchers
  },
  {
    path: '/card',
    name: 'CardWrapper',
    component: CardWrapper
  },
  {
    path: '/parent-child',
    name: 'ParentChild',
    component: ParentChild
  },
  {
    path: '/filter',
    name: 'Filters',
    component: Filters
  },
  {
    path: '/data-comparison',
    name: 'DataHandlingComparison',
    component: DataHandlingComparison
  },
  {
    path: '/blog-list',
    name: 'BlogList',
    component: BlogList
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
