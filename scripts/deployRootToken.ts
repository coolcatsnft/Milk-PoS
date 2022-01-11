import {ethers} from "hardhat";

async function main() {
    const rootTokenFactory = await ethers.getContractFactory("RootMintableERC20");
    let milk = await rootTokenFactory.deploy("Milk", "MILK");
    await milk.deployed();

    console.log('rootToken:', milk.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
