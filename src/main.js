import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import store from "./store";
import "./style/global.scss";

Vue.config.productionTip = false;
//全样式使用ElementUI搭建 请参考: https://element.eleme.cn/
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");