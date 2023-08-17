<template>
  <div id="gameBoard">
    <div class="event">
      <div class="title-wrap">
        <div class="title">Blockchain Service</div>
      </div>

      <div class="img">
        <img class="lion" src="../../assets/example-Lion.png" width="500px" />
      </div>

      <div class="buy-btn">
        <button class="minting" @click="onClickRedirect()">
          NFT 이미지 구매하기
        </button>
      </div>

      <div class="wallet-wrap">
        <div class="wallet-info">
          <button class="connect-wallet" @click="connect">지갑 연결하기</button>
          <span class="wallet-address" v-if="walletAddress">
            Wallet: {{ walletAddress }}
          </span>
          <div v-else>No wallet</div>
        </div>

        <div class="ntf-btn">
          <button class="check" @click="onClickMyNfts()">
            내 NFT 수 조회 {{ myNfts }}
          </button>
        </div>

        <div class="wallet-address">
          NFT 구매와 조회는 METAMASK가 있어야 사용 가능합니다.
        </div>
        <button class="redirect-btn" @click="$router.push('/beginner')">
          사용법을 잘 모르시겠나요?
        </button>
      </div>
    </div>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.8.1/web3.min.js"></script>
<script>
import Web3 from "web3";

export default {
  components: {},
  data() {
    return {
      walletAccount: "",
      myNfts: "",

      walletAddress: null
    };
  },
  mounted() {
    this.getAccount();
    this.connect();
  },
  methods: {
    onClickRedirect: function() {
      window.open("https://testnets.opensea.io/collection/likelion-univ11th-3");
    },
    async getAccount() {
      try {
        let accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        this.walletAccount = accounts[0];
      } catch (error) {
        console.error("Failed to get account:", error);
      }
    },
    async onClickMyNfts() {
      try {
        let response = await this.mintNftContract.methods
          .balanceOf(this.walletAccount)
          .call();
        this.myNfts = response + "개";
      } catch (error) {
        console.error("Error fetching NFT balance:", error);
      }
    },
    async onClickMint() {
      try {
        let response = await this.mintNftContract.methods
          .mintNft()
          .send({ from: this.walletAccount });
        console.log(response);
      } catch (error) {
        console.error("Error minting NFT:", error);
      }
    },
    async connect() {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          window.web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          // Get the current MetaMask selected/active wallet
          const walletAddress = accounts[0];
          this.walletAddress = walletAddress;
          console.log(`Wallet: ${walletAddress}`);
        } catch (error) {
          console.error("Error connecting to wallet:", error);
        }
      } else {
        console.log("지갑이 설치되어있지 않습니다!");
      }
    }
  },
  created() {
    //web3를 가져오는 코드
    this.web3 = new Web3(window.ethereum);

    // 작성한 스마트 컨트랙트를 불러오는 코드 => Contract 괄호에 들어가는 내용
    // abi, 스마트컨트랙트 주소, abi 값은 remix상에서 compile버튼에서
    this.mintNftContract = new this.web3.eth.Contract(
      [
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "string",
              name: "_metadataUri",
              type: "string"
            },
            {
              internalType: "uint256",
              name: "_totalNft",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address"
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address"
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool"
            }
          ],
          name: "ApprovalForAll",
          type: "event"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256"
            }
          ],
          name: "batchMint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "mintNft",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256"
            }
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256"
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes"
            }
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address"
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool"
            }
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256"
            }
          ],
          name: "getApproved",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "operator",
              type: "address"
            }
          ],
          name: "isApprovedForAll",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "metadataUri",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256"
            }
          ],
          name: "ownerOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4"
            }
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "index",
              type: "uint256"
            }
          ],
          name: "tokenByIndex",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "index",
              type: "uint256"
            }
          ],
          name: "tokenOfOwnerByIndex",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256"
            }
          ],
          name: "tokenURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalNft",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ],
      "0x1a4b834B5D155155f8b182e5c71e7d854FFA49C7"
    );

    console.log(this.mintNftContract);
  }
};
// mounted() {
//   this.event = require('../main/index2.html')
// }
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Caprasimo&family=Gaegu&family=Jua&family=Yanone+Kaffeesatz:wght@700&display=swap");

#gameBoard {
  background-color: #e5e3c8;
  min-height: 83vh;
  max-height: 83vh;
  display: flex;
}

.wallet-wrap {
  display: grid;
  justify-content: center;
}

.ntf-btn {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-family: "Jua", sans-serif;
  background-color: #e5e3c8;
}

.check {
  height: 6vh;
  width: 25vw;
  border: 0;
  border-radius: 30px;
  background-color: #d9d6af;
  font-family: "Jua", sans-serif;
  margin-bottom: 0.5vh;
  font-size: 1.1rem;
  margin-left: 13vw;
}

.minting {
  height: 6vh;
  width: 25vw;
  border: 0;
  border-radius: 30px;
  background-color: #a4d279;
  font-family: "Jua", sans-serif;
  margin-bottom: 8vh;
  font-size: 1.1rem;
}

.connect-wallet {
  height: 6vh;
  width: 25vw;
  border: 0;
  border-radius: 30px;
  background-color: #d9d6af;
  font-family: "Jua", sans-serif;
  margin-bottom: 0.5vh;
  margin-left: 13vw;
  font-size: 1.1rem;
}

.wallet-address {
  height: 6vh;
  width: 25vw;
  border: 0;
  font-family: "Jua", sans-serif;
  margin-bottom: -2vh;
  font-size: 0.7rem;
  display: grid;
  justify-content: center;
  margin-left: 13vw;
}

.title {
  font-family: "Indie Flower", cursive;
  font-size: 50px;
  margin: 20px;
}

.event {
  margin-top: 30px;
}
.title-wrap {
  display: grid;
  margin-top: 10vh;
  margin-bottom: 10vh;
  margin-left: 10vw;
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
  margin-left: 13vw;
}

.buy-btn {
  display: flex;
  justify-content: center;
  margin-left: 13vw;
}

.img {
  float: right;
  margin-left: 20vw;
  margin-top: -28vh;
}

.lion {
  border-radius: 50px;
}
</style>
