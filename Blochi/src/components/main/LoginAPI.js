import axios from "axios";

function registerUser() {
  const url = "http://localhost:3000/joinMembership";
  return axios.post("http://127.0.0.1:8000/users/login/");
}

export { registerUser };
