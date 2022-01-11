import {ethers} from "hardhat";

const childChainManager = "0x2e5e27d50EFa501D90Ad3638ff8441a0C0C0d75e";

async function main() {
    const childTokenFactory = await ethers.getContractFactory("ChildMintableERC20");
    let milk = await childTokenFactory.deploy("Milk", "MILK", childChainManager);
    await milk.deployed();

    const [admin] = await ethers.getSigners();

    await milk.mint(admin.address, ethers.utils.parseEther('1000'));

    console.log('npx hardhat verify --network mumbai ', milk.address, `"Milk"`, `"MILK"`, childChainManager);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
