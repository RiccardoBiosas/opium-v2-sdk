import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type PositionDataStruct = {
    positionAddress: string;
    name: string;
    symbol: string;
    totalSupply: BigNumberish;
    derivative: LibDerivative.DerivativeStruct;
    isLong: boolean;
};
export declare type PositionDataStructOutput = [
    string,
    string,
    string,
    BigNumber,
    LibDerivative.DerivativeStructOutput,
    boolean
] & {
    positionAddress: string;
    name: string;
    symbol: string;
    totalSupply: BigNumber;
    derivative: LibDerivative.DerivativeStructOutput;
    isLong: boolean;
};
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
export interface OnChainPositionsLensInterface extends utils.Interface {
    contractName: "OnChainPositionsLens";
    functions: {
        "getDerivativePositionsData(bytes32)": FunctionFragment;
        "getDerivativesPositionsData(bytes32[])": FunctionFragment;
        "predictPositionsAddressesByDerivative((uint256,uint256,uint256[],address,address,address))": FunctionFragment;
        "predictPositionsAddressesByDerivativeHash(bytes32)": FunctionFragment;
        "registry()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getDerivativePositionsData", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getDerivativesPositionsData", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "predictPositionsAddressesByDerivative", values: [LibDerivative.DerivativeStruct]): string;
    encodeFunctionData(functionFragment: "predictPositionsAddressesByDerivativeHash", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "registry", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getDerivativePositionsData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDerivativesPositionsData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "predictPositionsAddressesByDerivative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "predictPositionsAddressesByDerivativeHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
    events: {};
}
export interface OnChainPositionsLens extends BaseContract {
    contractName: "OnChainPositionsLens";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OnChainPositionsLensInterface;
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
        getDerivativePositionsData(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<[[PositionDataStructOutput, PositionDataStructOutput]]>;
        getDerivativesPositionsData(_derivativesHash: BytesLike[], overrides?: CallOverrides): Promise<[PositionDataStructOutput[]]>;
        predictPositionsAddressesByDerivative(_derivative: LibDerivative.DerivativeStruct, overrides?: CallOverrides): Promise<[string, string]>;
        predictPositionsAddressesByDerivativeHash(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<[string, string]>;
        registry(overrides?: CallOverrides): Promise<[string]>;
    };
    getDerivativePositionsData(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<[PositionDataStructOutput, PositionDataStructOutput]>;
    getDerivativesPositionsData(_derivativesHash: BytesLike[], overrides?: CallOverrides): Promise<PositionDataStructOutput[]>;
    predictPositionsAddressesByDerivative(_derivative: LibDerivative.DerivativeStruct, overrides?: CallOverrides): Promise<[string, string]>;
    predictPositionsAddressesByDerivativeHash(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<[string, string]>;
    registry(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getDerivativePositionsData(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<[PositionDataStructOutput, PositionDataStructOutput]>;
        getDerivativesPositionsData(_derivativesHash: BytesLike[], overrides?: CallOverrides): Promise<PositionDataStructOutput[]>;
        predictPositionsAddressesByDerivative(_derivative: LibDerivative.DerivativeStruct, overrides?: CallOverrides): Promise<[string, string]>;
        predictPositionsAddressesByDerivativeHash(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<[string, string]>;
        registry(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getDerivativePositionsData(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getDerivativesPositionsData(_derivativesHash: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        predictPositionsAddressesByDerivative(_derivative: LibDerivative.DerivativeStruct, overrides?: CallOverrides): Promise<BigNumber>;
        predictPositionsAddressesByDerivativeHash(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        registry(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getDerivativePositionsData(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDerivativesPositionsData(_derivativesHash: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        predictPositionsAddressesByDerivative(_derivative: LibDerivative.DerivativeStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        predictPositionsAddressesByDerivativeHash(_derivativeHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
