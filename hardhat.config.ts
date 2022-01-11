// @ts-ignore
import {config as dotEnvConfig} from "dotenv";
// @ts-ignore
import {HardhatUserConfig} from "hardhat/types";

import "hardhat-contract-sizer";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter"
import "@nomiclabs/hardhat-etherscan";
import "solidity-coverage";

dotEnvConfig();

const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
const RINKEBY_PRIVATE_KEY =
    process.env.RINKEBY_PRIVATE_KEY! ||
    "0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"; // well known private key
const MUMBAI_PRIVATE_KEY =
    process.env.MUMBAI_PRIVATE_KEY! ||
    "0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"; // well known private key
const GOERLI_PRIVATE_KEY =
    process.env.GOERLI_PRIVATE_KEY! ||
    "0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"; // well known private key
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

// @ts-ignore
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ],
  },
  mocha: {
    timeout: 2000000
  },
  networks: {
    hardhat: {},
    localhost: {},
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/OVgPMlT89-wcnuGmIITZgqj4HyYoCjPQ`,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/qZrZnrRSmALWX9OPIGyin5q5OiJ7Wdhp`,
      accounts: [MUMBAI_PRIVATE_KEY],
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/SGLqatJBAYbJaobqbisa8P95BTe1C-9e`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
    coverage: {
      url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYSCAN_API_KEY,
    }
  },
  gasReporter: {
    currency: 'USD',
    enabled: true,
    gasPriceApi: 'https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice',
    token: 'MATIC',
    coinmarketcap: '7cf54461-a104-400b-b085-a401539f67b9'
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: false,
    strict: false,
  }
};

export default config;
