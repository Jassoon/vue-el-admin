import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue';
import Layout from "@/layout/layout.vue";
import Guide from "@/views/guide/index";
import Login from "@/views/login/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/guide",
    component: Guide,
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
