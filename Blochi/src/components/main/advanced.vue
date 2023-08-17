<template>
    <div id="middle">
    <h1>Middel School Lion 똑똑이 사자</h1>
      <section id="background">
        <h2>Intro</h2>
        <p>
        어서오세요, 똑똑이 사자 여러분! Middle School에 오신 걸 환영해요!
        비트코인이나 이더리움과 같은 암호화폐, 써보신 분들도 꽤 있지 않나요?
        그래도 실제로 활용하거나 더 깊이 있는 내용을 다루는 때 어렵다는 느낌을 받으신 적 있을 거에요.
        암호화폐의 가치는 계속 변동하고, 지갑을 만들어 타인과 거래해야하니까요.
        기존과는 다른 더욱 큰 문제를 해결하거나 혁신을 이끌어내는 데에 활용하려면 어떻게 해야 할지 더욱 심도 있게 
        알아보는 시간을 가져보도록 할게요!<br /> 
            
        </p>
      </section>

      <section id="problem">
        <h2>Problem</h2>
        <p>
        우리 똑똑이 사자들은 블록체인 기술에 대해서 암호화폐에 대한 기본 개념은 알고 있지만,
        암호화폐를 활용해 실제로 무엇을 할 수 있는지 아직은 잘 모르겠다구요.
        블록체인 기술이 실제 세상에서 어떻게 활용되고 있는지, 또 어떤 문제를 해결하는데 도움이 될지
        감이 잘 오지 않는다면 불편하실 거에요.
        기존의 경험이나 활동도에서는 아직 부족한 부분이 많아서 제대로 활용하고자 할 때마다
        애로사항이 있었겠네요.
      </p>
      </section>
      <section id="solution">
        <h2>Solution</h2>
        <p>
          블록체인 기술과 NFT의 활용방안이 실제로 어디에 사용되는 지 알려줄게요. <br />
          단순한 이해를 넘어 어디서 응용되고 있는지 생각하는 것이 Point!<br />
          <div class="page-container">
    <section class="blockchain-services">
      <h2>블록체인 서비스 예시</h2>
      <table class="services-table">
        <thead>
          <tr>
            <th>서비스</th>
            <th>용도</th>
            <th>예시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>암호화폐 거래소</td>
            <td>암호화폐를 사고 팔 수 있는 플랫폼</td>
            <td>바이낸스, 업비트</td>
          </tr>
          <tr>
            <td>디파이 (DeFi) 플랫폼</td>
            <td>탈 중앙화 금융서비스</td>
            <td>커런시,컨버터(위메이드)</td>
          </tr>
          <tr>
            <td>로깅 및 공급망 관리</td>
            <td>제품의 생산과 유통 과정을 투명하게 기록 및 관리</td>
            <td>농산물 출하 정보, 제품 유통 과정</td>
          </tr>
          <tr>
            <td>블록체인 기반 투표 시스템(DAO)</td>
            <td>보안과 투명성을 강화한 전자 투표 시스템</td>
            <td>정부 선거, 기업 주주투표</td>
          </tr>
         
        </tbody>
      </table>
    </section>
  </div>


  <section class="nft-usage">
      <h2>NFT 이용방안</h2>
      <table class="usage-table">
        <thead>
          <tr>
            <th>카테고리</th>
            <th>설명</th>
            <th>예시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ART</td>
            <td>유명 아티스트의 디지털 아트 작품을 소유</td>
            <td>CryptoPunks, Beeple</td>
          </tr>
          <tr>
            <td>GAME</td>
            <td>게임 캐릭터, 아이템 등 다양한 콘텐츠 소유 및 거래</td>
            <td>Axie Infinity, SYLTARE</td>
          </tr>
          <tr>
            <td>TICKET</td>
            <td>이벤트 티켓 등을 디지털 형태로 발행하고 관리</td>
            <td>PSY NFT, NBA NFT</td>
          </tr>
          <tr>
            <td>FINANCE</td>
            <td>금융 상품 및 자산을 디지털 형태로 소유 및 거래</td>
            <td>Decentralized Lending, Yield Farming</td>
          </tr>
          <tr>
            <td>인증서</td>
            <td>이벤트, 상장, 등의 업적혹은 성취를 영구적으로 인증하는 NFT수상 등을 기념하고 영구적으로 기록하는 디지털 자산입니다.</td>
            <td>멋사 해커톤 수료증, MIT 졸업장 NFT</td>
          </tr>
          
        </tbody>
      </table>
    </section>




         
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

 #middle {
  margin-left: 20vw;
  margin-right: 20vw;
  font-family: "Jua", sans-serif;
  font-size: 20px;
  color: #392504;
  word-break: keep-all;
  min-height: 160vh;
}
.class-table {
    display: flex;
    justify-content: center;
    align-items: center;
}

td {
    position: relative;
    width: 500vw;
}

.nft-usage {
    margin-bottom: 10vh;
}
  </style>
  