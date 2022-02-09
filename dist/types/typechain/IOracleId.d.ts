import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IOracleIdInterface extends utils.Interface {
    contractName: "IOracleId";
    functions: {
        "getResult()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getResult", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getResult", data: BytesLike): Result;
    events: {};
}
export interface IOracleId extends BaseContract {
    contractName: "IOracleId";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IOracleIdInterface;
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
        getResult(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    getResult(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getResult(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getResult(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getResult(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
