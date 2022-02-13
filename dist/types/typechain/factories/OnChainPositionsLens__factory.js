"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnChainPositionsLens__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_registry",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_derivativeHash",
                type: "bytes32",
            },
        ],
        name: "getDerivativePositionsData",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "positionAddress",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "symbol",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "totalSupply",
                        type: "uint256",
                    },
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
                        name: "derivative",
                        type: "tuple",
                    },
                    {
                        internalType: "bool",
                        name: "isLong",
                        type: "bool",
                    },
                ],
                internalType: "struct PositionData[2]",
                name: "",
                type: "tuple[2]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32[]",
                name: "_derivativesHash",
                type: "bytes32[]",
            },
        ],
        name: "getDerivativesPositionsData",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "positionAddress",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "symbol",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "totalSupply",
                        type: "uint256",
                    },
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
                        name: "derivative",
                        type: "tuple",
                    },
                    {
                        internalType: "bool",
                        name: "isLong",
                        type: "bool",
                    },
                ],
                internalType: "struct PositionData[2][]",
                name: "",
                type: "tuple[2][]",
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
        name: "predictPositionsAddressesByDerivative",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_derivativeHash",
                type: "bytes32",
            },
        ],
        name: "predictPositionsAddressesByDerivativeHash",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "registry",
        outputs: [
            {
                internalType: "contract IRegistry",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var OnChainPositionsLens__factory = /** @class */ (function () {
    function OnChainPositionsLens__factory() {
    }
    OnChainPositionsLens__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    OnChainPositionsLens__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    OnChainPositionsLens__factory.abi = _abi;
    return OnChainPositionsLens__factory;
}());
exports.OnChainPositionsLens__factory = OnChainPositionsLens__factory;
//# sourceMappingURL=OnChainPositionsLens__factory.js.map