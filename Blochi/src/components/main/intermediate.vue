<template>
  <div id="elementary">
    <header>
      <h1 class="title">Elementary School Lion</h1>
    </header>
    <section id="background">
      <h2>Intro</h2>
      <p>
      안녕하세요, 아기 사자 여러분! Elementary School에 오신 걸 환영해요! <br />
      블록체인에 대해서는 들어본 적이 있지만, 사용해 보신 적은 없으시군요.
      이미 암호화폐라는 용어를 들어봤을 수도 있고, 어떤 사람들은 가상화폐로 돈을 번다는 말 자주 들어보셨죠?.
      하지만 그게 어떻게 가능한지, 어떻게 이러한 거래들이 일어나는지에 대해서는 아직은 모를거에요.
      <br />저희는 이제부터 블록체인의 기본 개념부터 차근차근 알아가 봅시다!
    </p>
    </section>

    <section id="problem">
      <h2>Problem</h2>
      <p>
        블록 체인 기술은 빠르게 성장하고 있고 그런 만큼 우리 삶에 훌쩍 다가오고 있어요. 하지만 어렵다는
        이유로 이해할 시도조자 안하고 있지는 않았나요?
        빠르게 변화하는 세상 속에서 똑똑이 사자가 되어보자구요!
      </p>
    </section>
    <section id="solution">
      <h2>Solution</h2>
      <p>
        <h3>간단하게 개념 알아가기</h3>
        <div class="question">
          <img src="../../assets/baby_boy.png" width="100px"/>
        &nbsp; &nbsp;익명의 아기 사자: 블록체인이 뭐에요??  <br />
        </div>
        
        <br />A: 블록체인이란 ‘탈중앙화’ 형태의 ‘투명’한 거래 시스템으로 디지털 세상에서 정보를 안전하게 보관하는 기술이에요.<br />
        탈중앙화와 투명한 성질을 가장 잘 나타내는 블록체인의 큰 특징 중 하나는 'Smart Contract'이라고 할 수 있답니다.<br /><br />
        
        <div class="question">
          <img src="../../assets/wondering_woman.png" width="100px"/>
        &nbsp; &nbsp;익명의 아기 사자: 스마트 컨트랙트가 뭔가요??  <br />
        </div>

        <br />Smartcontract(스마트 컨트랙트)는 블록체인 위에 저장된 Smart한 계약코드에요. <br />
        Smartcontract(스마트 컨트랙트)가 저장되면 블록체인의 특성에 따라 '탈중앙화'하게 관리되고 '투명'한 거래내역을 확인할 수 있답니다!<br />

        <h3>설명 뿐만 아니라 시각화를 통한 이해 UP!</h3>
        여러분의 이해를 돕기 위해 짧은 명화 동화를 준비했어요! <br /> <br />

        <div class="fairytale">

          <div class="fairytale-1">
            <div class="fairytale-img">
               <img class="img" src="../../assets/fairytale-1.png" width="500px"/>
            </div>
            <div class="content"> <br />사자가족은 음식과 과일을 공평하게 나눠먹기로 약속했어요.<br /><br /></div>
          </div>

          <div class="fairytale-2">
            <div class="fairytale-img">
               <img class="img" src="../../assets/fairytale-2.png" width="500px"/>
            </div>
            <div class="content"> <br />어느날부터 사자들은 서로를 의심하고 믿음이 사라져 싸우기 시작했어요.<br /><br /></div>
          </div>

          <div class="fairytale-3">
            <div class="fairytale-img">
               <img class="img" src="../../assets/fairytale-3.png" width="500px"/>
            </div>
            <div class="content"> <br />사자 마을의 솔로몬 레오는 디지털 블록을 활용해 음식을 기록하고 공평하게 나누었답니다.<br /><br /></div>
          </div>

          <div class="fairytale-4">
            <div class="fairytale-img">
               <img class="img" src="../../assets/fairytale-4.png" width="500px"/>
            </div>
            <div class="content"> <br />스마트 컨트랙트 덕분에 사자 가족은 평화를 되찾았네요~<br /><br /></div>
          </div>
        </div>

        Elementry School Lion에서는 블록체인의 핵심인 'Smart Contract'에 관한 흥미로운 이야기를 준비해봤어요!<br />
        이번 기회를 통해 블록체인의 개념을 이해했길 바라요.<br />
        다음에 더 재미있는 이야기로 찾아올게요!<br />

        <h3>Bonus stage: 직접 사용해볼까요?</h3><br />
        <button class="redirect-btn" @click="$router.push('/beginner')">
          METAMASK 써보기
        </button><br /> <br />

        
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BlockchainBeginner'
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caprasimo&family=Gaegu&family=Jua&family=Yanone+Kaffeesatz:wght@700&display=swap");

#elementary {
  margin-left: 20vw;
  margin-right: 20vw;
  font-family: "Jua", sans-serif;
  font-size: 20px;
  color: #392504;
  word-break: keep-all;
  min-height: 160vh;
  word-break: keep-all;
}
.question {
  display: flex;
  align-items: center;
}

.redirect-btn {
  height: 6vh;
  width: 25vw;
  border: 0;
  border-radius: 30px;
  background-color: #d9d6af;
  font-family: "Jua", sans-serif;
  margin-bottom: 2vh;
  font-size: 1.1rem;
  margin-left: 20vw;
}

.fairytale-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img {
  border-radius: 50px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
