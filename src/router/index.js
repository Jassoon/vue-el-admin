import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue';
import Layout from "@/layout/layout.vue";
import guide from "@/views/guide/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/guide",
    component: guide,
    redirect: "/guide/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/guide/index"),
        name: "Guide",
        meta: { title: "指南", icon: "guide", noCache: true },
      },
    ],
  },

  {
    path: "/",
    name: "Layout",
    component: Layout,
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
  routes,
});

export default router;
