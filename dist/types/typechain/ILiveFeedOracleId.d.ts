import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ILiveFeedOracleIdInterface extends utils.Interface {
    contractName: "ILiveFeedOracleId";
    functions: {
        "_callback(uint256)": FunctionFragment;
        "getResult()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "_callback", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getResult", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_callback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getResult", data: BytesLike): Result;
    events: {
        "LogMetadataSet(string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogMetadataSet"): EventFragment;
}
export declare type LogMetadataSetEvent = TypedEvent<[string], {
    metadata: string;
}>;
export declare type LogMetadataSetEventFilter = TypedEventFilter<LogMetadataSetEvent>;
export interface ILiveFeedOracleId extends BaseContract {
    contractName: "ILiveFeedOracleId";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILiveFeedOracleIdInterface;
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
        _callback(timestamp: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getResult(overrides?: CallOverrides): Promise<[BigNumber] & {
            result: BigNumber;
        }>;
    };
    _callback(timestamp: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getResult(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        _callback(timestamp: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getResult(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "LogMetadataSet(string)"(metadata?: null): LogMetadataSetEventFilter;
        LogMetadataSet(metadata?: null): LogMetadataSetEventFilter;
    };
    estimateGas: {
        _callback(timestamp: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getResult(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _callback(timestamp: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getResult(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
