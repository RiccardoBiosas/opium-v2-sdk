import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
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
    };
    type ProtocolParametersArgsStructOutput = [
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
    };
}
export interface RegistryInterface extends utils.Interface {
    contractName: "Registry";
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "addToWhitelist(address)": FunctionFragment;
        "getCore()": FunctionFragment;
        "getProtocolAddresses()": FunctionFragment;
        "getProtocolParameters()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "isCoreConfigurationUpdater(address)": FunctionFragment;
        "isCoreSpenderWhitelisted(address)": FunctionFragment;
        "isProtocolPaused()": FunctionFragment;
        "isProtocolPositionCancellationPaused()": FunctionFragment;
        "isProtocolPositionCreationPaused()": FunctionFragment;
        "isProtocolPositionExecutionPaused()": FunctionFragment;
        "isProtocolPositionMintingPaused()": FunctionFragment;
        "isProtocolPositionRedemptionPaused()": FunctionFragment;
        "isProtocolReserveClaimPaused()": FunctionFragment;
        "isRegistryManager(address)": FunctionFragment;
        "pause()": FunctionFragment;
        "pauseProtocolPositionCancellation()": FunctionFragment;
        "pauseProtocolPositionCreation()": FunctionFragment;
        "pauseProtocolPositionExecution()": FunctionFragment;
        "pauseProtocolPositionMinting()": FunctionFragment;
        "pauseProtocolPositionRedemption()": FunctionFragment;
        "pauseProtocolReserveClaim()": FunctionFragment;
        "removeFromWhitelist(address)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setDerivativeAuthorExecutionFeeCap(uint32)": FunctionFragment;
        "setDerivativeAuthorRedemptionReservePart(uint32)": FunctionFragment;
        "setNoDataCancellationPeriod(uint32)": FunctionFragment;
        "setProtocolAddresses(address,address,address,address,address)": FunctionFragment;
        "setProtocolExecutionReserveClaimer(address)": FunctionFragment;
        "setProtocolExecutionReservePart(uint32)": FunctionFragment;
        "setProtocolRedemptionReserveClaimer(address)": FunctionFragment;
        "setProtocolRedemptionReservePart(uint32)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "unpause()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "addToWhitelist", values: [string]): string;
    encodeFunctionData(functionFragment: "getCore", values?: undefined): string;
    encodeFunctionData(functionFragment: "getProtocolAddresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "getProtocolParameters", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "isCoreConfigurationUpdater", values: [string]): string;
    encodeFunctionData(functionFragment: "isCoreSpenderWhitelisted", values: [string]): string;
    encodeFunctionData(functionFragment: "isProtocolPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isProtocolPositionCancellationPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isProtocolPositionCreationPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isProtocolPositionExecutionPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isProtocolPositionMintingPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isProtocolPositionRedemptionPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isProtocolReserveClaimPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isRegistryManager", values: [string]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseProtocolPositionCancellation", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseProtocolPositionCreation", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseProtocolPositionExecution", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseProtocolPositionMinting", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseProtocolPositionRedemption", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseProtocolReserveClaim", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeFromWhitelist", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setDerivativeAuthorExecutionFeeCap", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDerivativeAuthorRedemptionReservePart", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setNoDataCancellationPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setProtocolAddresses", values: [string, string, string, string, string]): string;
    encodeFunctionData(functionFragment: "setProtocolExecutionReserveClaimer", values: [string]): string;
    encodeFunctionData(functionFragment: "setProtocolExecutionReservePart", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setProtocolRedemptionReserveClaimer", values: [string]): string;
    encodeFunctionData(functionFragment: "setProtocolRedemptionReservePart", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addToWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCore", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProtocolAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProtocolParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCoreConfigurationUpdater", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCoreSpenderWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isProtocolPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isProtocolPositionCancellationPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isProtocolPositionCreationPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isProtocolPositionExecutionPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isProtocolPositionMintingPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isProtocolPositionRedemptionPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isProtocolReserveClaimPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRegistryManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseProtocolPositionCancellation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseProtocolPositionCreation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseProtocolPositionExecution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseProtocolPositionMinting", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseProtocolPositionRedemption", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseProtocolReserveClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeFromWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDerivativeAuthorExecutionFeeCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDerivativeAuthorRedemptionReservePart", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNoDataCancellationPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProtocolAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProtocolExecutionReserveClaimer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProtocolExecutionReservePart", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProtocolRedemptionReserveClaimer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProtocolRedemptionReservePart", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    events: {
        "LogDerivativeAuthorExecutionFeeCapChanged(address,uint32)": EventFragment;
        "LogDerivativeAuthorRedemptionReservePartChanged(address,uint32)": EventFragment;
        "LogNoDataCancellationPeriodChanged(address,uint256)": EventFragment;
        "LogProtocolExecutionReserveClaimerChanged(address,address)": EventFragment;
        "LogProtocolExecutionReservePartChanged(address,uint32)": EventFragment;
        "LogProtocolPausableStateChanged(address,bool,bytes32)": EventFragment;
        "LogProtocolRedemptionReserveClaimerChanged(address,address)": EventFragment;
        "LogProtocolRedemptionReservePartChanged(address,uint32)": EventFragment;
        "LogWhitelistAccountAdded(address,address)": EventFragment;
        "LogWhitelistAccountRemoved(address,address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogDerivativeAuthorExecutionFeeCapChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogDerivativeAuthorRedemptionReservePartChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogNoDataCancellationPeriodChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogProtocolExecutionReserveClaimerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogProtocolExecutionReservePartChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogProtocolPausableStateChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogProtocolRedemptionReserveClaimerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogProtocolRedemptionReservePartChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogWhitelistAccountAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogWhitelistAccountRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export declare type LogDerivativeAuthorExecutionFeeCapChangedEvent = TypedEvent<[
    string,
    number
], {
    _setter: string;
    _derivativeAuthorExecutionFeeCap: number;
}>;
export declare type LogDerivativeAuthorExecutionFeeCapChangedEventFilter = TypedEventFilter<LogDerivativeAuthorExecutionFeeCapChangedEvent>;
export declare type LogDerivativeAuthorRedemptionReservePartChangedEvent = TypedEvent<[
    string,
    number
], {
    _setter: string;
    _derivativeAuthorRedemptionReservePart: number;
}>;
export declare type LogDerivativeAuthorRedemptionReservePartChangedEventFilter = TypedEventFilter<LogDerivativeAuthorRedemptionReservePartChangedEvent>;
export declare type LogNoDataCancellationPeriodChangedEvent = TypedEvent<[
    string,
    BigNumber
], {
    _setter: string;
    _noDataCancellationPeriod: BigNumber;
}>;
export declare type LogNoDataCancellationPeriodChangedEventFilter = TypedEventFilter<LogNoDataCancellationPeriodChangedEvent>;
export declare type LogProtocolExecutionReserveClaimerChangedEvent = TypedEvent<[
    string,
    string
], {
    _setter: string;
    _protocolExecutionReserveClaimer: string;
}>;
export declare type LogProtocolExecutionReserveClaimerChangedEventFilter = TypedEventFilter<LogProtocolExecutionReserveClaimerChangedEvent>;
export declare type LogProtocolExecutionReservePartChangedEvent = TypedEvent<[
    string,
    number
], {
    _setter: string;
    _protocolExecutionReservePart: number;
}>;
export declare type LogProtocolExecutionReservePartChangedEventFilter = TypedEventFilter<LogProtocolExecutionReservePartChangedEvent>;
export declare type LogProtocolPausableStateChangedEvent = TypedEvent<[
    string,
    boolean,
    string
], {
    _setter: string;
    _state: boolean;
    _role: string;
}>;
export declare type LogProtocolPausableStateChangedEventFilter = TypedEventFilter<LogProtocolPausableStateChangedEvent>;
export declare type LogProtocolRedemptionReserveClaimerChangedEvent = TypedEvent<[
    string,
    string
], {
    _setter: string;
    _protocolRedemptionReserveClaimer: string;
}>;
export declare type LogProtocolRedemptionReserveClaimerChangedEventFilter = TypedEventFilter<LogProtocolRedemptionReserveClaimerChangedEvent>;
export declare type LogProtocolRedemptionReservePartChangedEvent = TypedEvent<[
    string,
    number
], {
    _setter: string;
    _protocolRedemptionReservePart: number;
}>;
export declare type LogProtocolRedemptionReservePartChangedEventFilter = TypedEventFilter<LogProtocolRedemptionReservePartChangedEvent>;
export declare type LogWhitelistAccountAddedEvent = TypedEvent<[
    string,
    string
], {
    _setter: string;
    _whitelisted: string;
}>;
export declare type LogWhitelistAccountAddedEventFilter = TypedEventFilter<LogWhitelistAccountAddedEvent>;
export declare type LogWhitelistAccountRemovedEvent = TypedEvent<[
    string,
    string
], {
    _setter: string;
    _unlisted: string;
}>;
export declare type LogWhitelistAccountRemovedEventFilter = TypedEventFilter<LogWhitelistAccountRemovedEvent>;
export declare type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}>;
export declare type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export declare type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], {
    role: string;
    account: string;
    sender: string;
}>;
export declare type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export declare type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], {
    role: string;
    account: string;
    sender: string;
}>;
export declare type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface Registry extends BaseContract {
    contractName: "Registry";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RegistryInterface;
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
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        addToWhitelist(_whitelisted: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getCore(overrides?: CallOverrides): Promise<[string]>;
        getProtocolAddresses(overrides?: CallOverrides): Promise<[RegistryEntities.ProtocolAddressesArgsStructOutput]>;
        getProtocolParameters(overrides?: CallOverrides): Promise<[RegistryEntities.ProtocolParametersArgsStructOutput]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_governor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isCoreConfigurationUpdater(_address: string, overrides?: CallOverrides): Promise<[boolean]>;
        isCoreSpenderWhitelisted(_address: string, overrides?: CallOverrides): Promise<[boolean]>;
        isProtocolPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isProtocolPositionCancellationPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isProtocolPositionCreationPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isProtocolPositionExecutionPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isProtocolPositionMintingPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isProtocolPositionRedemptionPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isProtocolReserveClaimPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isRegistryManager(_address: string, overrides?: CallOverrides): Promise<[boolean]>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pauseProtocolPositionCancellation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pauseProtocolPositionCreation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pauseProtocolPositionExecution(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pauseProtocolPositionMinting(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pauseProtocolPositionRedemption(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pauseProtocolReserveClaim(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeFromWhitelist(_whitelisted: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDerivativeAuthorExecutionFeeCap(_derivativeAuthorExecutionFeeCap: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDerivativeAuthorRedemptionReservePart(_derivativeAuthorRedemptionReservePart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setNoDataCancellationPeriod(_noDataCancellationPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setProtocolAddresses(_opiumProxyFactory: string, _core: string, _oracleAggregator: string, _syntheticAggregator: string, _tokenSpender: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setProtocolExecutionReserveClaimer(_protocolExecutionReserveClaimer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setProtocolExecutionReservePart(_protocolExecutionReservePart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setProtocolRedemptionReserveClaimer(_protocolRedemptionReserveClaimer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setProtocolRedemptionReservePart(_protocolRedemptionReservePart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    addToWhitelist(_whitelisted: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getCore(overrides?: CallOverrides): Promise<string>;
    getProtocolAddresses(overrides?: CallOverrides): Promise<RegistryEntities.ProtocolAddressesArgsStructOutput>;
    getProtocolParameters(overrides?: CallOverrides): Promise<RegistryEntities.ProtocolParametersArgsStructOutput>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    initialize(_governor: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isCoreConfigurationUpdater(_address: string, overrides?: CallOverrides): Promise<boolean>;
    isCoreSpenderWhitelisted(_address: string, overrides?: CallOverrides): Promise<boolean>;
    isProtocolPaused(overrides?: CallOverrides): Promise<boolean>;
    isProtocolPositionCancellationPaused(overrides?: CallOverrides): Promise<boolean>;
    isProtocolPositionCreationPaused(overrides?: CallOverrides): Promise<boolean>;
    isProtocolPositionExecutionPaused(overrides?: CallOverrides): Promise<boolean>;
    isProtocolPositionMintingPaused(overrides?: CallOverrides): Promise<boolean>;
    isProtocolPositionRedemptionPaused(overrides?: CallOverrides): Promise<boolean>;
    isProtocolReserveClaimPaused(overrides?: CallOverrides): Promise<boolean>;
    isRegistryManager(_address: string, overrides?: CallOverrides): Promise<boolean>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pauseProtocolPositionCancellation(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pauseProtocolPositionCreation(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pauseProtocolPositionExecution(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pauseProtocolPositionMinting(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pauseProtocolPositionRedemption(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pauseProtocolReserveClaim(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeFromWhitelist(_whitelisted: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDerivativeAuthorExecutionFeeCap(_derivativeAuthorExecutionFeeCap: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDerivativeAuthorRedemptionReservePart(_derivativeAuthorRedemptionReservePart: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setNoDataCancellationPeriod(_noDataCancellationPeriod: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setProtocolAddresses(_opiumProxyFactory: string, _core: string, _oracleAggregator: string, _syntheticAggregator: string, _tokenSpender: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setProtocolExecutionReserveClaimer(_protocolExecutionReserveClaimer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setProtocolExecutionReservePart(_protocolExecutionReservePart: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setProtocolRedemptionReserveClaimer(_protocolRedemptionReserveClaimer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setProtocolRedemptionReservePart(_protocolRedemptionReservePart: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        addToWhitelist(_whitelisted: string, overrides?: CallOverrides): Promise<void>;
        getCore(overrides?: CallOverrides): Promise<string>;
        getProtocolAddresses(overrides?: CallOverrides): Promise<RegistryEntities.ProtocolAddressesArgsStructOutput>;
        getProtocolParameters(overrides?: CallOverrides): Promise<RegistryEntities.ProtocolParametersArgsStructOutput>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        initialize(_governor: string, overrides?: CallOverrides): Promise<void>;
        isCoreConfigurationUpdater(_address: string, overrides?: CallOverrides): Promise<boolean>;
        isCoreSpenderWhitelisted(_address: string, overrides?: CallOverrides): Promise<boolean>;
        isProtocolPaused(overrides?: CallOverrides): Promise<boolean>;
        isProtocolPositionCancellationPaused(overrides?: CallOverrides): Promise<boolean>;
        isProtocolPositionCreationPaused(overrides?: CallOverrides): Promise<boolean>;
        isProtocolPositionExecutionPaused(overrides?: CallOverrides): Promise<boolean>;
        isProtocolPositionMintingPaused(overrides?: CallOverrides): Promise<boolean>;
        isProtocolPositionRedemptionPaused(overrides?: CallOverrides): Promise<boolean>;
        isProtocolReserveClaimPaused(overrides?: CallOverrides): Promise<boolean>;
        isRegistryManager(_address: string, overrides?: CallOverrides): Promise<boolean>;
        pause(overrides?: CallOverrides): Promise<void>;
        pauseProtocolPositionCancellation(overrides?: CallOverrides): Promise<void>;
        pauseProtocolPositionCreation(overrides?: CallOverrides): Promise<void>;
        pauseProtocolPositionExecution(overrides?: CallOverrides): Promise<void>;
        pauseProtocolPositionMinting(overrides?: CallOverrides): Promise<void>;
        pauseProtocolPositionRedemption(overrides?: CallOverrides): Promise<void>;
        pauseProtocolReserveClaim(overrides?: CallOverrides): Promise<void>;
        removeFromWhitelist(_whitelisted: string, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setDerivativeAuthorExecutionFeeCap(_derivativeAuthorExecutionFeeCap: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setDerivativeAuthorRedemptionReservePart(_derivativeAuthorRedemptionReservePart: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setNoDataCancellationPeriod(_noDataCancellationPeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setProtocolAddresses(_opiumProxyFactory: string, _core: string, _oracleAggregator: string, _syntheticAggregator: string, _tokenSpender: string, overrides?: CallOverrides): Promise<void>;
        setProtocolExecutionReserveClaimer(_protocolExecutionReserveClaimer: string, overrides?: CallOverrides): Promise<void>;
        setProtocolExecutionReservePart(_protocolExecutionReservePart: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setProtocolRedemptionReserveClaimer(_protocolRedemptionReserveClaimer: string, overrides?: CallOverrides): Promise<void>;
        setProtocolRedemptionReservePart(_protocolRedemptionReservePart: BigNumberish, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        unpause(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogDerivativeAuthorExecutionFeeCapChanged(address,uint32)"(_setter?: string | null, _derivativeAuthorExecutionFeeCap?: BigNumberish | null): LogDerivativeAuthorExecutionFeeCapChangedEventFilter;
        LogDerivativeAuthorExecutionFeeCapChanged(_setter?: string | null, _derivativeAuthorExecutionFeeCap?: BigNumberish | null): LogDerivativeAuthorExecutionFeeCapChangedEventFilter;
        "LogDerivativeAuthorRedemptionReservePartChanged(address,uint32)"(_setter?: string | null, _derivativeAuthorRedemptionReservePart?: BigNumberish | null): LogDerivativeAuthorRedemptionReservePartChangedEventFilter;
        LogDerivativeAuthorRedemptionReservePartChanged(_setter?: string | null, _derivativeAuthorRedemptionReservePart?: BigNumberish | null): LogDerivativeAuthorRedemptionReservePartChangedEventFilter;
        "LogNoDataCancellationPeriodChanged(address,uint256)"(_setter?: string | null, _noDataCancellationPeriod?: BigNumberish | null): LogNoDataCancellationPeriodChangedEventFilter;
        LogNoDataCancellationPeriodChanged(_setter?: string | null, _noDataCancellationPeriod?: BigNumberish | null): LogNoDataCancellationPeriodChangedEventFilter;
        "LogProtocolExecutionReserveClaimerChanged(address,address)"(_setter?: string | null, _protocolExecutionReserveClaimer?: string | null): LogProtocolExecutionReserveClaimerChangedEventFilter;
        LogProtocolExecutionReserveClaimerChanged(_setter?: string | null, _protocolExecutionReserveClaimer?: string | null): LogProtocolExecutionReserveClaimerChangedEventFilter;
        "LogProtocolExecutionReservePartChanged(address,uint32)"(_setter?: string | null, _protocolExecutionReservePart?: BigNumberish | null): LogProtocolExecutionReservePartChangedEventFilter;
        LogProtocolExecutionReservePartChanged(_setter?: string | null, _protocolExecutionReservePart?: BigNumberish | null): LogProtocolExecutionReservePartChangedEventFilter;
        "LogProtocolPausableStateChanged(address,bool,bytes32)"(_setter?: string | null, _state?: boolean | null, _role?: BytesLike | null): LogProtocolPausableStateChangedEventFilter;
        LogProtocolPausableStateChanged(_setter?: string | null, _state?: boolean | null, _role?: BytesLike | null): LogProtocolPausableStateChangedEventFilter;
        "LogProtocolRedemptionReserveClaimerChanged(address,address)"(_setter?: string | null, _protocolRedemptionReserveClaimer?: string | null): LogProtocolRedemptionReserveClaimerChangedEventFilter;
        LogProtocolRedemptionReserveClaimerChanged(_setter?: string | null, _protocolRedemptionReserveClaimer?: string | null): LogProtocolRedemptionReserveClaimerChangedEventFilter;
        "LogProtocolRedemptionReservePartChanged(address,uint32)"(_setter?: string | null, _protocolRedemptionReservePart?: BigNumberish | null): LogProtocolRedemptionReservePartChangedEventFilter;
        LogProtocolRedemptionReservePartChanged(_setter?: string | null, _protocolRedemptionReservePart?: BigNumberish | null): LogProtocolRedemptionReservePartChangedEventFilter;
        "LogWhitelistAccountAdded(address,address)"(_setter?: string | null, _whitelisted?: string | null): LogWhitelistAccountAddedEventFilter;
        LogWhitelistAccountAdded(_setter?: string | null, _whitelisted?: string | null): LogWhitelistAccountAddedEventFilter;
        "LogWhitelistAccountRemoved(address,address)"(_setter?: string | null, _unlisted?: string | null): LogWhitelistAccountRemovedEventFilter;
        LogWhitelistAccountRemoved(_setter?: string | null, _unlisted?: string | null): LogWhitelistAccountRemovedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        addToWhitelist(_whitelisted: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getCore(overrides?: CallOverrides): Promise<BigNumber>;
        getProtocolAddresses(overrides?: CallOverrides): Promise<BigNumber>;
        getProtocolParameters(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_governor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isCoreConfigurationUpdater(_address: string, overrides?: CallOverrides): Promise<BigNumber>;
        isCoreSpenderWhitelisted(_address: string, overrides?: CallOverrides): Promise<BigNumber>;
        isProtocolPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isProtocolPositionCancellationPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isProtocolPositionCreationPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isProtocolPositionExecutionPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isProtocolPositionMintingPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isProtocolPositionRedemptionPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isProtocolReserveClaimPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isRegistryManager(_address: string, overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pauseProtocolPositionCancellation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pauseProtocolPositionCreation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pauseProtocolPositionExecution(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pauseProtocolPositionMinting(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pauseProtocolPositionRedemption(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pauseProtocolReserveClaim(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeFromWhitelist(_whitelisted: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDerivativeAuthorExecutionFeeCap(_derivativeAuthorExecutionFeeCap: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDerivativeAuthorRedemptionReservePart(_derivativeAuthorRedemptionReservePart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setNoDataCancellationPeriod(_noDataCancellationPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setProtocolAddresses(_opiumProxyFactory: string, _core: string, _oracleAggregator: string, _syntheticAggregator: string, _tokenSpender: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setProtocolExecutionReserveClaimer(_protocolExecutionReserveClaimer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setProtocolExecutionReservePart(_protocolExecutionReservePart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setProtocolRedemptionReserveClaimer(_protocolRedemptionReserveClaimer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setProtocolRedemptionReservePart(_protocolRedemptionReservePart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addToWhitelist(_whitelisted: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getCore(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProtocolAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProtocolParameters(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_governor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isCoreConfigurationUpdater(_address: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isCoreSpenderWhitelisted(_address: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isProtocolPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isProtocolPositionCancellationPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isProtocolPositionCreationPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isProtocolPositionExecutionPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isProtocolPositionMintingPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isProtocolPositionRedemptionPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isProtocolReserveClaimPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isRegistryManager(_address: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pauseProtocolPositionCancellation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pauseProtocolPositionCreation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pauseProtocolPositionExecution(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pauseProtocolPositionMinting(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pauseProtocolPositionRedemption(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pauseProtocolReserveClaim(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeFromWhitelist(_whitelisted: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDerivativeAuthorExecutionFeeCap(_derivativeAuthorExecutionFeeCap: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDerivativeAuthorRedemptionReservePart(_derivativeAuthorRedemptionReservePart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setNoDataCancellationPeriod(_noDataCancellationPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setProtocolAddresses(_opiumProxyFactory: string, _core: string, _oracleAggregator: string, _syntheticAggregator: string, _tokenSpender: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setProtocolExecutionReserveClaimer(_protocolExecutionReserveClaimer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setProtocolExecutionReservePart(_protocolExecutionReservePart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setProtocolRedemptionReserveClaimer(_protocolRedemptionReserveClaimer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setProtocolRedemptionReservePart(_protocolRedemptionReservePart: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
