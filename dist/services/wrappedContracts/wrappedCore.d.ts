import { BigNumberish, CallOverrides, ContractReceipt } from 'ethers';
import { ContractService } from '../factoryService/contractService';
import { TProtocolAddresses, TProtocolParameters } from '../../types/contracts';
import { TDerivative, TAddress } from '../../types/index';
import { Core } from '../../types/typechain';
export declare class WrappedCore {
    private coreService$;
    constructor(_coreService: ContractService<Core>);
    create(_derivative: TDerivative, _amount: BigNumberish, _positionsOwners: [TAddress, TAddress], _overrides?: CallOverrides): Promise<ContractReceipt>;
    createAndMint(_derivative: TDerivative, _amount: BigNumberish, _positionsOwners: [TAddress, TAddress], _overrides?: CallOverrides): Promise<ContractReceipt>;
    mint(_amount: BigNumberish, _positionsAddresses: [TAddress, TAddress], _positionsOwners: [TAddress, TAddress], _overrides?: CallOverrides): Promise<ContractReceipt>;
    redeem(_amount: BigNumberish, _positionsAddresses: [TAddress, TAddress], _overrides?: CallOverrides): Promise<ContractReceipt>;
    redeemMany(_amounts: BigNumberish[], _positionsAddresses: [TAddress, TAddress][], _overrides?: CallOverrides): Promise<ContractReceipt>;
    executeOne(_amount: BigNumberish, _positionAddress: string, _overrides?: CallOverrides): Promise<ContractReceipt>;
    executeOneWithAddress(_positionOwner: string, _amount: BigNumberish, _positionAddress: string, _overrides?: CallOverrides): Promise<ContractReceipt>;
    executeMany(_amounts: BigNumberish[], _positionsAddresses: string[], _overrides?: CallOverrides): Promise<ContractReceipt>;
    executeManyWithAddress(_positionOwner: string, _amounts: BigNumberish[], _positionsAddresses: string[], _overrides?: CallOverrides): Promise<ContractReceipt>;
    cancelOne(_positionAddress: string, _amount: BigNumberish, _overrides?: CallOverrides): Promise<ContractReceipt>;
    cancelMany(_amounts: BigNumberish[], _positionsAddresses: string[], _overrides?: CallOverrides): Promise<ContractReceipt>;
    isDerivativeCancelledByDerivative(_derivative: TDerivative): Promise<boolean>;
    isDerivativeCancelledByDerivativeHash(_derivativeHash: string): Promise<boolean>;
    getDerivativePayoutsByDerivative(_derivative: TDerivative): Promise<[BigNumberish, BigNumberish]>;
    getDerivativePayoutsByDerivativeHash(_derivativeHash: string): Promise<[BigNumberish, BigNumberish]>;
    getReservesVaultBalance(_reseveRecipient: string, _tokenAddress: string): Promise<BigNumberish>;
    getProtocolAddresses(): Promise<TProtocolAddresses>;
    getProtocolParametersArgs(): Promise<TProtocolParameters>;
    computeDerivativeMargin(_derivative: TDerivative, _amount: BigNumberish): Promise<BigNumberish>;
    private getDerivativePayouts$;
    private isDerivativeCancelled$;
    private computeDerivativeMargin$;
}
