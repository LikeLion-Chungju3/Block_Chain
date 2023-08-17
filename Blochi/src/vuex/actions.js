// import { UID, IS_AUTH, ERROR_STATE } from "./mutation_types";
// import api from "../service";

// let setUID = ({ commit }, data) => {
//   commit(UID, data);
// };

// let setErrorState = ({ commit }, data) => {
//   commit(ERROR_STATE, data);
// };

// let setIsAuth = ({ commit }, data) => {
//   commit(IS_AUTH, data);
// };

// // 백엔드에서 반환한 결과값을 가지고 로그인 성공 실패 여부를 vuex에 넣어준다.
// let processResponse = (store, loginResponse) => {
//   switch (loginResponse) {
//     case "noAuth":
//       setErrorState(store, "Wrong ID or Password");
//       setIsAuth(store, false);
//       break;
//     case "done":
//       setErrorState(store, "No period");
//       setIsAuth(store, false);
//       break;
//     default:
//       setUID(store, loginResponse.UID);
//       setErrorState(store, "");
//       setIsAuth(store, true);
//   }
// };

// export default {
//   async login(store, { uid, password }) {
//     /* 로그인은 백엔드를 다녀와야 하냐 비동기 처리를 한다 */
//     let loginResponse = await api.login(uid, password);
//     processResponse(store, loginResponse);
//     return store.getters.getIsAuth; // 로그인 결과를 리턴한다
//   }
// };
