<template>
  <div id="login">
    <div class="logo">Two Some Block</div>
    <!-- <div class="logo-2">Login</div> -->
    <div class="login-wrap">
      <div class="wrap">
        <input class="id" placeholder="Enter your ID" v-model="uid" />
        <input
          class="password"
          placeholder="Enter your password"
          v-model="password"
        />
        <button class="login-btn" type="loginSubmit">Login</button>
      </div>
    </div>
    <div class="membership-wrap">
      <div class="membership-discription">아직 회원이 아니신가요?</div>
      <div class="membership" @click="$router.push('/joinMembership')">회원 가입하기</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
      password: ""
    };
  },
  methods: {
    loginSubmit() {
      let saveData = {};
      saveData.userId = this.userId;
      saveData.userPassword = this.userPassword;

      try {
        this.$axios
          .post(HOST + "/signin", JSON.stringify(saveData), {
            headers: {
              "Content-Type": `application/json`
            }
          })
          .then(res => {
            if (res.status === 200) {
              // 로그인 성공시 처리해줘야할 부분
              this.$store.commit("login", res.data);
              this.$router.push("/loginSuccess");
            }
          });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caprasimo&family=Gaegu&family=Jua&family=Yanone+Kaffeesatz:wght@700&display=swap");
#login {
  display: grid;
  justify-content: center;
}

.logo {
  font-family: "Indie Flower", cursive;
  font-size: 3rem;
  /* margin-left: -5vw; */
  margin-top: 7vh;
  text-align: center;
}

.logo-2 {
  font-family: "Indie Flower", cursive;
  display: grid;
  justify-content: center;
  font-size: 3rem;
  /* margin-right: -5vw; */
}
.login-wrap {
  display: grid;
  margin-top: 3vw;
  margin-bottom: 3vh;
  padding: 10vw;
  justify-content: center;
  grid-template-rows: 1fr 1fr;
  border-radius: 10px;
  width: 15vw;
  height: 7vh;
  background-color: #a4d279;
}

.wrap {
  display: grid;
  align-items: baseline;
}

.id {
  margin: 0.5vw;
  margin-top: -6vh;
  padding-left: 3vw;
  height: 6vh;
  width: 20vw;
  border: 0;
  border-radius: 30px;
  background-color: #f0f6e2;
  box-shadow: inset 7px 2px 10px #babebc, inset -5px -5px 12px #fff;
  font-family: "Jua", sans-serif;
}

.password {
  margin: 0.5vw;
  padding-left: 3vw;
  height: 6vh;
  width: 20vw;
  border: 0;
  border-radius: 30px;
  background-color: #f0f6e2;
  box-shadow: inset 7px 2px 10px #babebc, inset -5px -5px 12px #fff;
  font-family: "Jua", sans-serif;
}

.login-btn {
  margin: 0.5vw;
  height: 6vh;
  width: 23vw;
  border: 0;
  border-radius: 30px;
  background-color: #d9d6af;
  font-family: "Jua", sans-serif;
}

.membership-wrap {
  display: grid;
  font-family: "Jua", sans-serif;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 3vh;
  text-align: center;
  justify-content: center;
}

.membership-discription {
  margin-top: 1vh;
  margin-bottom: 1.5vh;
}
.membership {
  font-family: "Jua", sans-serif;
  height: 4vh;
  width: 15vw;
  border: 0;
  border-radius: 30px;
  background-color: #d9d6af;
  padding-top: 1vh;
  margin-bottom: 1.5vh;
}
</style>
