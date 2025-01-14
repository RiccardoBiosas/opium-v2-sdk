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
export interface IDerivativeLogicInterface extends utils.Interface {
    contractName: "IDerivativeLogic";
    functions: {
        "allowThirdpartyExecution(bool)": FunctionFragment;
        "getAuthorAddress()": FunctionFragment;
        "getAuthorCommission()": FunctionFragment;
        "getExecutionPayout((uint256,uint256,uint256[],address,address,address),uint256)": FunctionFragment;
        "getMargin((uint256,uint256,uint256[],address,address,address))": FunctionFragment;
        "getSyntheticIdName()": FunctionFragment;
        "thirdpartyExecutionAllowed(address)": FunctionFragment;
        "validateInput((uint256,uint256,uint256[],address,address,address))": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "allowThirdpartyExecution", values: [boolean]): string;
    encodeFunctionData(functionFragment: "getAuthorAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAuthorCommission", values?: undefined): string;
    encodeFunctionData(functionFragment: "getExecutionPayout", values: [LibDerivative.DerivativeStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getMargin", values: [LibDerivative.DerivativeStruct]): string;
    encodeFunctionData(functionFragment: "getSyntheticIdName", values?: undefined): string;
    encodeFunctionData(functionFragment: "thirdpartyExecutionAllowed", values: [string]): string;
    encodeFunctionData(functionFragment: "validateInput", values: [LibDerivative.DerivativeStruct]): string;
    decodeFunctionResult(functionFragment: "allowThirdpartyExecution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAuthorAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAuthorCommission", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExecutionPayout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMargin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSyntheticIdName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "thirdpartyExecutionAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateInput", data: BytesLike): Result;
    events: {
        "LogMetadataSet(string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogMetadataSet"): EventFragment;
}
export declare type LogMetadataSetEvent = TypedEvent<[string], {
    metadata: string;
}>;
export declare type LogMetadataSetEventFilter = TypedEventFilter<LogMetadataSetEvent>;
export interface IDerivativeLogic extends BaseContract {
    contractName: "IDerivativeLogic";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDerivativeLogicInterface;
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
        allowThirdpartyExecution(_allow: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAuthorAddress(overrides?: CallOverrides): Promise<[string] & {
            authorAddress: string;
        }>;
        getAuthorCommission(overrides?: CallOverrides): Promise<[BigNumber] & {
            commission: BigNumber;
        }>;
        getExecutionPayout(_derivative: LibDerivative.DerivativeStruct, _result: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            buyerPayout: BigNumber;
            sellerPayout: BigNumber;
        }>;
        getMargin(_derivative: LibDerivative.DerivativeStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            buyerMargin: BigNumber;
            sellerMargin: BigNumber;
        }>;
        getSyntheticIdName(overrides?: CallOverrides): Promise<[string]>;
        thirdpartyExecutionAllowed(_derivativeOwner: string, overrides?: CallOverrides): Promise<[boolean]>;
        validateInput(_derivative: LibDerivative.DerivativeStruct, overrides?: CallOverrides): Promise<[boolean]>;
    };
    allowThirdpartyExecution(_allow: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAuthorAddress(overrides?: CallOverrides): Promise<string>;
    getAuthorCommission(overrides?: CallOverrides): Promise<BigNumber>;
    getExecutionPayout(_derivative: LibDerivative.DerivativeStruct, _result: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        buyerPayout: BigNumber;
        sellerPayout: BigNumber;
    }>;
    getMargin(_derivative: LibDerivative.DerivativeStruct, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        buyerMargin: BigNumber;
        sellerMargin: BigNumber;
    }>;
    getSyntheticIdName(overrides?: CallOverrides): Promise<string>;
    thirdpartyExecutionAllowed(_derivativeOwner: string, overrides?: CallOverrides): Promise<boolean>;
    validateInput(_derivative: LibDerivative.DerivativeStruct, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        allowThirdpartyExecution(_allow: boolean, overrides?: CallOverrides): Promise<void>;
        getAuthorAddress(overrides?: CallOverrides): Promise<string>;
        getAuthorCommission(overrides?: CallOverrides): Promise<BigNumber>;
        getExecutionPayout(_derivative: LibDerivative.DerivativeStruct, _result: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            buyerPayout: BigNumber;
            sellerPayout: BigNumber;
        }>;
        getMargin(_derivative: LibDerivative.DerivativeStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            buyerMargin: BigNumber;
            sellerMargin: BigNumber;
        }>;
        getSyntheticIdName(overrides?: CallOverrides): Promise<string>;
        thirdpartyExecutionAllowed(_derivativeOwner: string, overrides?: CallOverrides): Promise<boolean>;
        validateInput(_derivative: LibDerivative.DerivativeStruct, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "LogMetadataSet(string)"(metadata?: null): LogMetadataSetEventFilter;
        LogMetadataSet(metadata?: null): LogMetadataSetEventFilter;
    };
    estimateGas: {
        allowThirdpartyExecution(_allow: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAuthorAddress(overrides?: CallOverrides): Promise<BigNumber>;
        getAuthorCommission(overrides?: CallOverrides): Promise<BigNumber>;
        getExecutionPayout(_derivative: LibDerivative.DerivativeStruct, _result: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getMargin(_derivative: LibDerivative.DerivativeStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getSyntheticIdName(overrides?: CallOverrides): Promise<BigNumber>;
        thirdpartyExecutionAllowed(_derivativeOwner: string, overrides?: CallOverrides): Promise<BigNumber>;
        validateInput(_derivative: LibDerivative.DerivativeStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        allowThirdpartyExecution(_allow: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAuthorAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAuthorCommission(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExecutionPayout(_derivative: LibDerivative.DerivativeStruct, _result: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMargin(_derivative: LibDerivative.DerivativeStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSyntheticIdName(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        thirdpartyExecutionAllowed(_derivativeOwner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateInput(_derivative: LibDerivative.DerivativeStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
