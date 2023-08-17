<template>
  <div id="info">
    <h1>1. METAMASK 구글 확장 프로그램을 설치해주세요!</h1>
    <div class="btn-wrap">
      <button class="download" @click="onClickRedirect">다운 받기</button>
    </div>
    <div class="ex1">
      MetaMask는 탈중앙화 웹, 즉 새로운 인터넷에 연결할 수 있도록 도와줍니다.
      우리는 전 세계 수백만 명의 사람들에게 신뢰를 받고 있는 분산 엑세스 서비스
      입니다. <br />
      <br />
      MetaMask 앱은 지갑이자 브라우저입니다. 디지털 자산을 구매, 전송, 지출 및
      교환하세요! 언제 어디서나 누구에게나 결제하고 웹사이트에 안전하게
      로그인하여 자산 거래, 대출, 차용, 게임 플레이, 콘텐츠 게시, 디지털 아트
      구매 등 다양한 작업을 수행할 수 있습니다!
      <br />
    </div>
    <h1>2. METAMASK 계정을 만들어 주세요.</h1>
    <h1>3. 계정을 만들었다면 네트워크 설정을 해주세요.</h1>
    <div class="ex1">
      Chrome(크롬) 오른쪽 상단의 확장 프로그램에서 METAMASK를 활성화 해주신 후
      오른쪽 상단의 점 <br />
      세 개를 클릭하여 설정으로 이동한 다음 네트워크를 클릭해주세요. <br />
      네트워크 수동 추가를 선택해주신 후 다음 이미지처럼 입력해주시면 됩니다!
      <br />
      <br />
    </div>
    <div>
      <br />
      Network Name: Mumbai Testnet <br />
      New RPC URL: https://rpc-mumbai.maticvigil.com/ <br />
      Chain ID: 80001 <br />
      Currency Symbol: MATIC <br />
      Block Explorer URL: https://polygonscan.com/ <br />
      <br />
    </div>

    <h1><br /><br />끝났습니다! 이제 블록 체인 기술을 사용해 봅시다!</h1>
    <button class="redirect-btn" @click="$router.push('/point')">
      NFT 이미지 구매하기
    </button>
    <div class="ex-network">
      <img src="../../assets/ex-img1.png" width="300px" />
    </div>
    <div class="ex1"></div>
    <div class="meta-img">
      <img
        class="meta-logo"
        src="../../assets/MetaMask-Logo.jpg"
        width="330px"
      />
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    onClickRedirect: function() {
      window.open("https://metamask.io/");
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caprasimo&family=Gaegu&family=Jua&family=Yanone+Kaffeesatz:wght@700&display=swap");
#info {
  margin-left: 20vw;
  margin-right: 20vw;
  font-family: "Jua", sans-serif;
  font-size: 20px;
  color: #392504;
  word-break: keep-all;
  min-height: 160vh;
}

.btn-wrap {
  display: grid;
  justify-content: end;
  margin-right: 4vw;
}
.download {
  height: 6vh;
  width: 10vw;
  border: 0;
  border-radius: 30px;
  background-color: #d9d6af;
  font-family: "Jua", sans-serif;
  margin-bottom: 2vh;
  font-size: 1.1rem;
}
.ex1 {
  display: flex;
  justify-content: flex-start;
  width: 30vw;
  word-break: keep-all;
}

.meta-img {
  position: static;
  margin-left: 35vw;
  margin-top: -109vh;
}

.ex-network {
  position: static;
  margin-left: 35vw;
  margin-top: -85vh;
}

.redirect-btn {
  height: 6vh;
  width: 15vw;
  border: 0;
  border-radius: 30px;
  background-color: #d9d6af;
  font-family: "Jua", sans-serif;
  margin-bottom: 2vh;
  font-size: 1.1rem;
  margin-left: 40%;
}
</style>
