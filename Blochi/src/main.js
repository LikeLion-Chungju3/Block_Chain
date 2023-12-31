import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Routes from "./routes";
import "regenerator-runtime";
import store from "./vuex/store.js";
import * as VeeValidate from "vee-validate";
import axios from "axios";

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VeeValidate);

Vue.prototype.$eventBus = new Vue();
Vue.prototype.$axios = axios;

const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

new Vue({
  el: "#app",
  render: h => h(App),
  router: router,
  store: store
});
