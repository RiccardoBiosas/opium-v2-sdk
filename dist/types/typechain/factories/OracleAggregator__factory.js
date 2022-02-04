"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OracleAggregator__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_oracleId",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "_timestamp",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "_data",
                type: "uint256",
            },
        ],
        name: "LogDataProvided",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "data",
                type: "uint256",
            },
        ],
        name: "__callback",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "oracleId",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "getData",
        outputs: [
            {
                internalType: "uint256",
                name: "dataResult",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "oracleId",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "hasData",
        outputs: [
            {
                internalType: "bool",
                name: "result",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var OracleAggregator__factory = /** @class */ (function () {
    function OracleAggregator__factory() {
    }
    OracleAggregator__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    OracleAggregator__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    OracleAggregator__factory.abi = _abi;
    return OracleAggregator__factory;
}());
exports.OracleAggregator__factory = OracleAggregator__factory;
//# sourceMappingURL=OracleAggregator__factory.js.map