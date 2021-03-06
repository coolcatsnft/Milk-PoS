/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "ChildMintableERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChildMintableERC20__factory>;
    getContractFactory(
      name: "AccessControlMixin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlMixin__factory>;
    getContractFactory(
      name: "EIP712Base",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EIP712Base__factory>;
    getContractFactory(
      name: "IChildToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IChildToken__factory>;
    getContractFactory(
      name: "IMintableERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMintableERC20__factory>;
    getContractFactory(
      name: "NativeMetaTransaction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NativeMetaTransaction__factory>;
    getContractFactory(
      name: "RootMintableERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RootMintableERC20__factory>;

    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "ChildMintableERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChildMintableERC20>;
    getContractAt(
      name: "AccessControlMixin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlMixin>;
    getContractAt(
      name: "EIP712Base",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EIP712Base>;
    getContractAt(
      name: "IChildToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IChildToken>;
    getContractAt(
      name: "IMintableERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMintableERC20>;
    getContractAt(
      name: "NativeMetaTransaction",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NativeMetaTransaction>;
    getContractAt(
      name: "RootMintableERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RootMintableERC20>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
