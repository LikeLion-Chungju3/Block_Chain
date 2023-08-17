<template>
  <div id="Membership">
    <div>회원 가입</div>
    <div class="submitInfo-wrap">
      <input class="id" placeholder="Enter your ID" v-model="username" />
      <input
        class="password"
        placeholder="Enter your password"
        v-model="password"
      />
      <input class="email" placeholder="Enter your Email" v-model="email" />
      <input
        class="phoneNumber"
        placeholder="Enter your Phone Number"
        v-model="phoneNumber"
      />
    </div>
    <button class="submit" @click="submitForm()">가입하기</button>
  </div>
</template>
<script>
import { registerUser } from "../main/LoginAPI.js";

export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      phoneNumber: ""
    };
  },
  methods: {
    async submitForm() {
      // 비동기 객체가 오기때문에 비동기 처리
      console.log("submit");
      const userData = {
        username: this.username,
        password: this.password,
        email: this.email,
        phoneNumber: this.phonenumber,

        logMessage: ""
      };
      const { data } = await registerUser(userData); // Destructuring
      this.logMessage = `${data.username}님이 가입되었습니다.`;
      //template literal(백틱문법) 자바스크립변수를 문자열과 합침
      this.initForm();
    },
    initForm() {
      this.username = "";
      this.password = "";
      this.email = "";
      this.phoneNumber = "";
    }
  }
};
</script>
<style lang="" scoped></style>
