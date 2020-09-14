import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue';
import Layout from "@/layout/layout.vue";
import Guide from "@/views/guide/index";
import Login from "@/views/login/index";

Vue.use(VueRouter);

const routes = [{
    path: "/login",
    name: "login",
    component: Login,
    hidden: true,
  },
  {
    path: "/guide",
    component: Layout,
    // redirect: "/guide/index",
    meta: {
      title: "综合区",
      icon: "guide",
      noCache: true
    },
    hidden: false,
    children: [{
        path: "/guide",
        component: () => import("@/views/guide/index"),
        name: "Guide",
        meta: {
          title: "指南一",
          icon: "guide",
          noCache: true
        },
      },
      {
        path: "/user",
        component: () => import("@/views/user/index"),
        name: "user",
        meta: {
          title: "用户",
          icon: "guide",
          noCache: true
        },
      },
    ],
  },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    hidden: true,
    redirect: "/home",
    children: [{
      path: "/home",
      component: () => import("@/views/home/index"),
      name: "Guide",
      meta: {
        title: "首页",
        icon: "home",
        noCache: true
      },
    }]
  },
  {
    path: "/404",
    component: () => import("@/views/errorPage/404"),
    hidden: true,
  },
  {
    path: "/icons/icons",
    component: Layout,
    // redirect: '/page/test-page/index',
    meta: {
      title: "测试菜单",
      icon: "goods",
      noCache: true
    },
    name: "test-page",
    hidden: false,
    children: [{
        path: "/icons",
        component: () => import("@/views/icons/icons"),
        name: "test-page-index",
        meta: {
          tagName: "icon",
          title: "测试页ICON",
          icon: "qq",
          noCache: false,
        },
      },
      {
        path: "/table",
        component: () => import("@/views/table/table"),
        name: "test-page-index2",
        meta: {
          tagName: "表格样式",
          title: "表格",
          icon: "user",
          noCache: false,
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;