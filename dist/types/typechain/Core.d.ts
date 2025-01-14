import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace LibDerivative {
    type DerivativeStruct = {
        margin: BigNumberish;
        endTime: BigNumberish;
        params: BigNumberish[];
        oracleId: string;
        token: string;
        syntheticId: string;
    };
    type DerivativeStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber[],
        string,
        string,
        string
    ] & {
        margin: BigNumber;
        endTime: BigNumber;
        params: BigNumber[];
        oracleId: string;
        token: string;
        syntheticId: string;
    };
}
export declare namespace RegistryEntities {
    type ProtocolAddressesArgsStruct = {
        core: string;
        opiumProxyFactory: string;
        oracleAggregator: string;
        syntheticAggregator: string;
        tokenSpender: string;
        protocolExecutionReserveClaimer: string;
        protocolRedemptionReserveClaimer: string;
        __gapOne: BigNumberish;
        __gapTwo: BigNumberish;
    };
    type ProtocolAddressesArgsStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        number,
        number
    ] & {
        core: string;
        opiumProxyFactory: string;
        oracleAggregator: string;
        syntheticAggregator: string;
        tokenSpender: string;
        protocolExecutionReserveClaimer: string;
        protocolRedemptionReserveClaimer: string;
        __gapOne: number;
        __gapTwo: number;
    };
    type ProtocolParametersArgsStruct = {
        noDataCancellationPeriod: BigNumberish;
        derivativeAuthorExecutionFeeCap: BigNumberish;
        derivativeAuthorRedemptionReservePart: BigNumberish;
        protocolExecutionReservePart: BigNumberish;
        protocolRedemptionReservePart: BigNumberish;
        __gapOne: BigNumberish;
        __gapTwo: BigNumberish;
        __gapThree: BigNumberish;
        __gapFour: BigNumberish;
    };
    type ProtocolParametersArgsStructOutput = [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
    ] & {
        noDataCancellationPeriod: number;
        derivativeAuthorExecutionFeeCap: number;
        derivativeAuthorRedemptionReservePart: number;
        protocolExecutionReservePart: number;
        protocolRedemptionReservePart: number;
        __gapOne: number;
        __gapTwo: number;
        __gapThree: number;
        __gapFour: number;
    };
}
export interface CoreInterface extends utils.Interface {
    contractName: "Core";
    functions: {
        "cancel(address[],uint256[])": FunctionFragment;
        "claimReserves(address,uint256)": FunctionFragment;
        "create((uint256,uint256,uint256[],address,address,address),uint256,address[2])": FunctionFragment;
        "createAndMint((uint256,uint256,uint256[],address,address,address),uint256,address[2])": FunctionFragment;
        "execute(address,uint256)": FunctionFragment;
        "getDerivativePayouts(bytes32)": FunctionFragment;
        "getP2pDerivativeVaultFunds(bytes32)": FunctionFragment;
        "getProtocolAddresses()": FunctionFragment;
        "getProtocolParametersArgs()": FunctionFragment;
        "getRegistry()": FunctionFragment;
        "getReservesVaultBalance(address,address)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "isDerivativeCancelled(bytes32)": FunctionFragment;
        "mint(uint256,address[2],address[2])": FunctionFragment;
        "redeem(address[2],uint256)": FunctionFragment;
        "setRegistry(address)": FunctionFragment;
        "updateProtocolAddresses()": FunctionFragment;
        "updateProtocolParametersArgs()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "cancel", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "claimReserves", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "create", values: [LibDerivative.DerivativeStruct, BigNumberish, [string, string]]): string;
    encodeFunctionData(functionFragment: "createAndMint", values: [LibDerivative.DerivativeStruct, BigNumberish, [string, string]]): string;
    encodeFunctionData(functionFragment: "execute", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDerivativePayouts", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getP2pDerivativeVaultFunds", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getProtocolAddresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "getProtocolParametersArgs", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReservesVaultBalance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "isDerivativeCancelled", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "mint", values: [BigNumberish, [string, string], [string, string]]): string;
    encodeFunctionData(functionFragment: "redeem", values: [[string, string], BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRegistry", values: [string]): string;
    encodeFunctionData(functionFragment: "updateProtocolAddresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateProtocolParametersArgs", values?: undefined): string;
    decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDerivativePayouts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getP2pDerivativeVaultFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProtocolAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProtocolParametersArgs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReservesVaultBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDerivativeCancelled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateProtocolAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateProtocolParametersArgs", data: BytesLike): Result;
    events: {
        "LogCancelled(address,bytes32,uint256)": EventFragment;
        "LogCreated(address,address,bytes32,uint256)": EventFragment;
        "LogDerivativeHashCancelled(address,bytes32)": EventFragment;
        "LogExecuted(address,address,uint256)": EventFragment;
        "LogMinted(address,address,bytes32,uint256)": EventFragment;
        "LogRedeemed(address,bytes32,uint256)": EventFragment;
        "LogRegistryChanged(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogCancelled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogDerivativeHashCancelled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogMinted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogRedeemed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogRegistryChanged"): EventFragment;
}
export declare type LogCancelledEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _positionOwner: string;
    _derivativeHash: string;
    _amount: BigNumber;
}>;
export declare type LogCancelledEventFilter = TypedEventFilter<LogCancelledEvent>;
export declare type LogCreatedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], {
    _buyer: string;
    _seller: string;
    _derivativeHash: string;
    _amount: BigNumber;
}>;
export declare type LogCreatedEventFilter = TypedEventFilter<LogCreatedEvent>;
export declare type LogDerivativeHashCancelledEvent = TypedEvent<[
    string,
    string
], {
    _positionOwner: string;
    _derivativeHash: string;
}>;
export declare type LogDerivativeHashCancelledEventFilter = TypedEventFilter<LogDerivativeHashCancelledEvent>;
export declare type LogExecutedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _positionsOwner: string;
    _positionAddress: string;
    _amount: BigNumber;
}>;
export declare type LogExecutedEventFilter = TypedEventFilter<LogExecutedEvent>;
export declare type LogMintedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], {
    _buyer: string;
    _seller: string;
    _derivativeHash: string;
    _amount: BigNumber;
}>;
export declare type LogMintedEventFilter = TypedEventFilter<LogMintedEvent>;
export declare type LogRedeemedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _positionOwner: string;
    _derivativeHash: string;
    _amount: BigNumber;
}>;
export declare type LogRedeemedEventFilter = TypedEventFilter<LogRedeemedEvent>;
export declare type LogRegistryChangedEvent = TypedEvent<[
    string,
    string
], {
    _changer: string;
    _newRegistryAddress: string;
}>;
export declare type LogRegistryChangedEventFilter = TypedEventFilter<LogRegistryChangedEvent>;
export interface Core extends BaseContract {
    contractName: "Core";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CoreInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        "cancel(address[],uint256[])"(_positionsAddresses: string[], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "cancel(address,uint256)"(_positionAddress: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "claimReserves(address,uint256)"(_tokenAddress: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "claimReserves(address)"(_tokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        create(_derivative: LibDerivative.DerivativeStruct, _amount: BigNumberish, _positionsOwners: [string, string], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createAndMint(_derivative: LibDerivative.DerivativeStruct, _amount: BigNumberish, _positionsOwners: [string, string], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "execute(address,uint256)"(_positionAddress: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "execute(address[],uint256[])"(_positionsAddresses: string[], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "execute(address,address[],uint256[])"(_positionsOwner: string, _positionsAddresses: string[], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "execute(address,address,uint256)"(_positionOwner: string, _positionAddress: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getDerivativePayouts(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<[[BigNumber, BigNumber]]>;
        getP2pDerivativeVaultFunds(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getProtocolAddresses(overrides?: CallOverrides): Promise<[RegistryEntities.ProtocolAddressesArgsStructOutput]>;
        getProtocolParametersArgs(overrides?: CallOverrides): Promise<[RegistryEntities.ProtocolParametersArgsStructOutput]>;
        getRegistry(overrides?: CallOverrides): Promise<[string]>;
        getReservesVaultBalance(_reseveRecipient: string, _token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_registry: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isDerivativeCancelled(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        mint(_amount: BigNumberish, _positionsAddresses: [string, string], _positionsOwners: [string, string], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "redeem(address[2],uint256)"(_positionsAddresses: [string, string], _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "redeem(address[2][],uint256[])"(_positionsAddresses: [string, string][], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRegistry(_registry: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateProtocolAddresses(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateProtocolParametersArgs(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    "cancel(address[],uint256[])"(_positionsAddresses: string[], _amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "cancel(address,uint256)"(_positionAddress: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "claimReserves(address,uint256)"(_tokenAddress: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "claimReserves(address)"(_tokenAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    create(_derivative: LibDerivative.DerivativeStruct, _amount: BigNumberish, _positionsOwners: [string, string], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createAndMint(_derivative: LibDerivative.DerivativeStruct, _amount: BigNumberish, _positionsOwners: [string, string], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "execute(address,uint256)"(_positionAddress: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "execute(address[],uint256[])"(_positionsAddresses: string[], _amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "execute(address,address[],uint256[])"(_positionsOwner: string, _positionsAddresses: string[], _amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "execute(address,address,uint256)"(_positionOwner: string, _positionAddress: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getDerivativePayouts(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    getP2pDerivativeVaultFunds(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getProtocolAddresses(overrides?: CallOverrides): Promise<RegistryEntities.ProtocolAddressesArgsStructOutput>;
    getProtocolParametersArgs(overrides?: CallOverrides): Promise<RegistryEntities.ProtocolParametersArgsStructOutput>;
    getRegistry(overrides?: CallOverrides): Promise<string>;
    getReservesVaultBalance(_reseveRecipient: string, _token: string, overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_registry: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isDerivativeCancelled(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    mint(_amount: BigNumberish, _positionsAddresses: [string, string], _positionsOwners: [string, string], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "redeem(address[2],uint256)"(_positionsAddresses: [string, string], _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "redeem(address[2][],uint256[])"(_positionsAddresses: [string, string][], _amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRegistry(_registry: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateProtocolAddresses(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateProtocolParametersArgs(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        "cancel(address[],uint256[])"(_positionsAddresses: string[], _amounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        "cancel(address,uint256)"(_positionAddress: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "claimReserves(address,uint256)"(_tokenAddress: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "claimReserves(address)"(_tokenAddress: string, overrides?: CallOverrides): Promise<void>;
        create(_derivative: LibDerivative.DerivativeStruct, _amount: BigNumberish, _positionsOwners: [string, string], overrides?: CallOverrides): Promise<void>;
        createAndMint(_derivative: LibDerivative.DerivativeStruct, _amount: BigNumberish, _positionsOwners: [string, string], overrides?: CallOverrides): Promise<void>;
        "execute(address,uint256)"(_positionAddress: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "execute(address[],uint256[])"(_positionsAddresses: string[], _amounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        "execute(address,address[],uint256[])"(_positionsOwner: string, _positionsAddresses: string[], _amounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        "execute(address,address,uint256)"(_positionOwner: string, _positionAddress: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getDerivativePayouts(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getP2pDerivativeVaultFunds(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getProtocolAddresses(overrides?: CallOverrides): Promise<RegistryEntities.ProtocolAddressesArgsStructOutput>;
        getProtocolParametersArgs(overrides?: CallOverrides): Promise<RegistryEntities.ProtocolParametersArgsStructOutput>;
        getRegistry(overrides?: CallOverrides): Promise<string>;
        getReservesVaultBalance(_reseveRecipient: string, _token: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_registry: string, overrides?: CallOverrides): Promise<void>;
        isDerivativeCancelled(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        mint(_amount: BigNumberish, _positionsAddresses: [string, string], _positionsOwners: [string, string], overrides?: CallOverrides): Promise<void>;
        "redeem(address[2],uint256)"(_positionsAddresses: [string, string], _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "redeem(address[2][],uint256[])"(_positionsAddresses: [string, string][], _amounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        setRegistry(_registry: string, overrides?: CallOverrides): Promise<void>;
        updateProtocolAddresses(overrides?: CallOverrides): Promise<void>;
        updateProtocolParametersArgs(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogCancelled(address,bytes32,uint256)"(_positionOwner?: string | null, _derivativeHash?: BytesLike | null, _amount?: null): LogCancelledEventFilter;
        LogCancelled(_positionOwner?: string | null, _derivativeHash?: BytesLike | null, _amount?: null): LogCancelledEventFilter;
        "LogCreated(address,address,bytes32,uint256)"(_buyer?: string | null, _seller?: string | null, _derivativeHash?: BytesLike | null, _amount?: null): LogCreatedEventFilter;
        LogCreated(_buyer?: string | null, _seller?: string | null, _derivativeHash?: BytesLike | null, _amount?: null): LogCreatedEventFilter;
        "LogDerivativeHashCancelled(address,bytes32)"(_positionOwner?: string | null, _derivativeHash?: BytesLike | null): LogDerivativeHashCancelledEventFilter;
        LogDerivativeHashCancelled(_positionOwner?: string | null, _derivativeHash?: BytesLike | null): LogDerivativeHashCancelledEventFilter;
        "LogExecuted(address,address,uint256)"(_positionsOwner?: string | null, _positionAddress?: string | null, _amount?: null): LogExecutedEventFilter;
        LogExecuted(_positionsOwner?: string | null, _positionAddress?: string | null, _amount?: null): LogExecutedEventFilter;
        "LogMinted(address,address,bytes32,uint256)"(_buyer?: string | null, _seller?: string | null, _derivativeHash?: BytesLike | null, _amount?: null): LogMintedEventFilter;
        LogMinted(_buyer?: string | null, _seller?: string | null, _derivativeHash?: BytesLike | null, _amount?: null): LogMintedEventFilter;
        "LogRedeemed(address,bytes32,uint256)"(_positionOwner?: string | null, _derivativeHash?: BytesLike | null, _amount?: null): LogRedeemedEventFilter;
        LogRedeemed(_positionOwner?: string | null, _derivativeHash?: BytesLike | null, _amount?: null): LogRedeemedEventFilter;
        "LogRegistryChanged(address,address)"(_changer?: string | null, _newRegistryAddress?: string | null): LogRegistryChangedEventFilter;
        LogRegistryChanged(_changer?: string | null, _newRegistryAddress?: string | null): LogRegistryChangedEventFilter;
    };
    estimateGas: {
        "cancel(address[],uint256[])"(_positionsAddresses: string[], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "cancel(address,uint256)"(_positionAddress: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "claimReserves(address,uint256)"(_tokenAddress: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "claimReserves(address)"(_tokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        create(_derivative: LibDerivative.DerivativeStruct, _amount: BigNumberish, _positionsOwners: [string, string], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createAndMint(_derivative: LibDerivative.DerivativeStruct, _amount: BigNumberish, _positionsOwners: [string, string], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "execute(address,uint256)"(_positionAddress: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "execute(address[],uint256[])"(_positionsAddresses: string[], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "execute(address,address[],uint256[])"(_positionsOwner: string, _positionsAddresses: string[], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "execute(address,address,uint256)"(_positionOwner: string, _positionAddress: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getDerivativePayouts(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getP2pDerivativeVaultFunds(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getProtocolAddresses(overrides?: CallOverrides): Promise<BigNumber>;
        getProtocolParametersArgs(overrides?: CallOverrides): Promise<BigNumber>;
        getRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        getReservesVaultBalance(_reseveRecipient: string, _token: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_registry: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isDerivativeCancelled(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        mint(_amount: BigNumberish, _positionsAddresses: [string, string], _positionsOwners: [string, string], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "redeem(address[2],uint256)"(_positionsAddresses: [string, string], _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "redeem(address[2][],uint256[])"(_positionsAddresses: [string, string][], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRegistry(_registry: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateProtocolAddresses(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateProtocolParametersArgs(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        "cancel(address[],uint256[])"(_positionsAddresses: string[], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "cancel(address,uint256)"(_positionAddress: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "claimReserves(address,uint256)"(_tokenAddress: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "claimReserves(address)"(_tokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        create(_derivative: LibDerivative.DerivativeStruct, _amount: BigNumberish, _positionsOwners: [string, string], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createAndMint(_derivative: LibDerivative.DerivativeStruct, _amount: BigNumberish, _positionsOwners: [string, string], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "execute(address,uint256)"(_positionAddress: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "execute(address[],uint256[])"(_positionsAddresses: string[], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "execute(address,address[],uint256[])"(_positionsOwner: string, _positionsAddresses: string[], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "execute(address,address,uint256)"(_positionOwner: string, _positionAddress: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getDerivativePayouts(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getP2pDerivativeVaultFunds(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProtocolAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProtocolParametersArgs(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReservesVaultBalance(_reseveRecipient: string, _token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_registry: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isDerivativeCancelled(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(_amount: BigNumberish, _positionsAddresses: [string, string], _positionsOwners: [string, string], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "redeem(address[2],uint256)"(_positionsAddresses: [string, string], _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "redeem(address[2][],uint256[])"(_positionsAddresses: [string, string][], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRegistry(_registry: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateProtocolAddresses(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateProtocolParametersArgs(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
