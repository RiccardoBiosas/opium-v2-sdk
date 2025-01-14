import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface OracleAggregatorInterface extends utils.Interface {
    contractName: "OracleAggregator";
    functions: {
        "__callback(uint256,uint256)": FunctionFragment;
        "getData(address,uint256)": FunctionFragment;
        "hasData(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "__callback", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getData", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "hasData", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "__callback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasData", data: BytesLike): Result;
    events: {
        "LogDataProvided(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogDataProvided"): EventFragment;
}
export declare type LogDataProvidedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    _oracleId: string;
    _timestamp: BigNumber;
    _data: BigNumber;
}>;
export declare type LogDataProvidedEventFilter = TypedEventFilter<LogDataProvidedEvent>;
export interface OracleAggregator extends BaseContract {
    contractName: "OracleAggregator";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OracleAggregatorInterface;
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
        __callback(timestamp: BigNumberish, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getData(oracleId: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            dataResult: BigNumber;
        }>;
        hasData(oracleId: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<[boolean] & {
            result: boolean;
        }>;
    };
    __callback(timestamp: BigNumberish, data: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getData(oracleId: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    hasData(oracleId: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        __callback(timestamp: BigNumberish, data: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getData(oracleId: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        hasData(oracleId: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "LogDataProvided(address,uint256,uint256)"(_oracleId?: string | null, _timestamp?: BigNumberish | null, _data?: BigNumberish | null): LogDataProvidedEventFilter;
        LogDataProvided(_oracleId?: string | null, _timestamp?: BigNumberish | null, _data?: BigNumberish | null): LogDataProvidedEventFilter;
    };
    estimateGas: {
        __callback(timestamp: BigNumberish, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getData(oracleId: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        hasData(oracleId: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        __callback(timestamp: BigNumberish, data: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getData(oracleId: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasData(oracleId: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
