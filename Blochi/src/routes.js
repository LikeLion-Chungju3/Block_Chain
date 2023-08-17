import main from "./components/main/main.vue";
import gamePage from "./components/main/gamePage";
import point from "./components/main/Point.vue";
import login from "./components/main/Login.vue";
import store from "../src/vuex/store.js";
import loginsuccess from "./components/main/LoginSuccessMain.vue";
import beginner from "./components/main/beginner.vue";
import intermediate from "./components/main/intermediate.vue";
import advanced from "./components/main/advanced.vue";
import joinMembership from "./components/main/JoinMembership.vue";

const requireAuth = () => (from, to, next) => {
  if (store.getters.getIsAuth) return next(); // isAuth === true면 페이지 이동
  next("/login"); // isAuth === false면 다시 로그인 화면으로 이동
};

export default [
  { path: "/", component: main },
  { path: "/game", component: gamePage },
  { path: "/point", component: point },
  { path: "/login", component: login },
  { path: "/loginSuccess", name: loginsuccess, component: loginsuccess },
  { path: "/beginner", component: beginner },
  { path: "/intermediate", component: intermediate },
  { path: "/advanced", component: advanced },
  { path: "/joinMembership", component: joinMembership }
];
