import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "reset-css"; //初始化浏览器样式

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
