/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IDerivativeLogic,
  IDerivativeLogicInterface,
} from "../IDerivativeLogic";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "LogMetadataSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_allow",
        type: "bool",
      },
    ],
    name: "allowThirdpartyExecution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAuthorAddress",
    outputs: [
      {
        internalType: "address",
        name: "authorAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAuthorCommission",
    outputs: [
      {
        internalType: "uint256",
        name: "commission",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "margin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "params",
            type: "uint256[]",
          },
          {
            internalType: "address",
            name: "oracleId",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "syntheticId",
            type: "address",
          },
        ],
        internalType: "struct LibDerivative.Derivative",
        name: "_derivative",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_result",
        type: "uint256",
      },
    ],
    name: "getExecutionPayout",
    outputs: [
      {
        internalType: "uint256",
        name: "buyerPayout",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sellerPayout",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "margin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "params",
            type: "uint256[]",
          },
          {
            internalType: "address",
            name: "oracleId",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "syntheticId",
            type: "address",
          },
        ],
        internalType: "struct LibDerivative.Derivative",
        name: "_derivative",
        type: "tuple",
      },
    ],
    name: "getMargin",
    outputs: [
      {
        internalType: "uint256",
        name: "buyerMargin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sellerMargin",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSyntheticIdName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_derivativeOwner",
        type: "address",
      },
    ],
    name: "thirdpartyExecutionAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "margin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "params",
            type: "uint256[]",
          },
          {
            internalType: "address",
            name: "oracleId",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "syntheticId",
            type: "address",
          },
        ],
        internalType: "struct LibDerivative.Derivative",
        name: "_derivative",
        type: "tuple",
      },
    ],
    name: "validateInput",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IDerivativeLogic__factory {
  static readonly abi = _abi;
  static createInterface(): IDerivativeLogicInterface {
    return new utils.Interface(_abi) as IDerivativeLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDerivativeLogic {
    return new Contract(address, _abi, signerOrProvider) as IDerivativeLogic;
  }
}
