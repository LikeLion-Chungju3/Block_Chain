import router from "../routes.js";
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = {
  state: {
    userId: "",
    userName: "",
    token: ""
  },
  mutations: {
    login(state, payload) {
      state.userId = payload.userId;
      state.userName = payload.userName;
      state.token = payload.token;
    },
    loginCheck(state) {
      if (!state.token) {
        router
          .push({
            name: "Login"
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  plugins: [
    createPersistedState({
      paths: ["userStore"]
    })
  ]
};

export default store;
