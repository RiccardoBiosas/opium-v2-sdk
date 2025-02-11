"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_positionOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "_derivativeHash",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "LogCancelled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_buyer",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_seller",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "_derivativeHash",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "LogCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_positionOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "_derivativeHash",
                type: "bytes32",
            },
        ],
        name: "LogDerivativeHashCancelled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_positionsOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_positionAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "LogExecuted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_buyer",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_seller",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "_derivativeHash",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "LogMinted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_positionOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "_derivativeHash",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "LogRedeemed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_changer",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_newRegistryAddress",
                type: "address",
            },
        ],
        name: "LogRegistryChanged",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_positionsAddresses",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]",
            },
        ],
        name: "cancel",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_positionAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "cancel",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_tokenAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "claimReserves",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_tokenAddress",
                type: "address",
            },
        ],
        name: "claimReserves",
        outputs: [],
        stateMutability: "nonpayable",
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
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "address[2]",
                name: "_positionsOwners",
                type: "address[2]",
            },
        ],
        name: "create",
        outputs: [],
        stateMutability: "nonpayable",
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
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "address[2]",
                name: "_positionsOwners",
                type: "address[2]",
            },
        ],
        name: "createAndMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_positionAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_positionsAddresses",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]",
            },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_positionsOwner",
                type: "address",
            },
            {
                internalType: "address[]",
                name: "_positionsAddresses",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]",
            },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_positionOwner",
                type: "address",
            },
            {
                internalType: "address",
                name: "_positionAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "getDerivativePayouts",
        outputs: [
            {
                internalType: "uint256[2]",
                name: "",
                type: "uint256[2]",
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
        name: "getP2pDerivativeVaultFunds",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getProtocolAddresses",
        outputs: [
            {
                components: [
                    {
                        internalType: "contract ICore",
                        name: "core",
                        type: "address",
                    },
                    {
                        internalType: "contract IOpiumProxyFactory",
                        name: "opiumProxyFactory",
                        type: "address",
                    },
                    {
                        internalType: "contract IOracleAggregator",
                        name: "oracleAggregator",
                        type: "address",
                    },
                    {
                        internalType: "contract ISyntheticAggregator",
                        name: "syntheticAggregator",
                        type: "address",
                    },
                    {
                        internalType: "contract ITokenSpender",
                        name: "tokenSpender",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "protocolExecutionReserveClaimer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "protocolRedemptionReserveClaimer",
                        type: "address",
                    },
                    {
                        internalType: "uint32",
                        name: "__gapOne",
                        type: "uint32",
                    },
                    {
                        internalType: "uint32",
                        name: "__gapTwo",
                        type: "uint32",
                    },
                ],
                internalType: "struct RegistryEntities.ProtocolAddressesArgs",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getProtocolParametersArgs",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint32",
                        name: "noDataCancellationPeriod",
                        type: "uint32",
                    },
                    {
                        internalType: "uint32",
                        name: "derivativeAuthorExecutionFeeCap",
                        type: "uint32",
                    },
                    {
                        internalType: "uint32",
                        name: "derivativeAuthorRedemptionReservePart",
                        type: "uint32",
                    },
                    {
                        internalType: "uint32",
                        name: "protocolExecutionReservePart",
                        type: "uint32",
                    },
                    {
                        internalType: "uint32",
                        name: "protocolRedemptionReservePart",
                        type: "uint32",
                    },
                    {
                        internalType: "uint32",
                        name: "__gapOne",
                        type: "uint32",
                    },
                    {
                        internalType: "uint32",
                        name: "__gapTwo",
                        type: "uint32",
                    },
                    {
                        internalType: "uint32",
                        name: "__gapThree",
                        type: "uint32",
                    },
                    {
                        internalType: "uint32",
                        name: "__gapFour",
                        type: "uint32",
                    },
                ],
                internalType: "struct RegistryEntities.ProtocolParametersArgs",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getRegistry",
        outputs: [
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
                internalType: "address",
                name: "_reseveRecipient",
                type: "address",
            },
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
        ],
        name: "getReservesVaultBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
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
                name: "_registry",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "isDerivativeCancelled",
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
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "address[2]",
                name: "_positionsAddresses",
                type: "address[2]",
            },
            {
                internalType: "address[2]",
                name: "_positionsOwners",
                type: "address[2]",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[2]",
                name: "_positionsAddresses",
                type: "address[2]",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "redeem",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[2][]",
                name: "_positionsAddresses",
                type: "address[2][]",
            },
            {
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]",
            },
        ],
        name: "redeem",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_registry",
                type: "address",
            },
        ],
        name: "setRegistry",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "updateProtocolAddresses",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "updateProtocolParametersArgs",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var Core__factory = /** @class */ (function () {
    function Core__factory() {
    }
    Core__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Core__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Core__factory.abi = _abi;
    return Core__factory;
}());
exports.Core__factory = Core__factory;
//# sourceMappingURL=Core__factory.js.map