declare class FlowService {
    private readonly minterFlowAddress;
    private readonly minterPrivateKeyHex;
    private readonly minterAccountIndex;
    constructor(minterFlowAddress: string, minterPrivateKeyHex: string, minterAccountIndex: string | number);
    authorizeMinter: () => (account?: any) => Promise<any>;
    getAccount: (addr: string) => Promise<any>;
    private signWithKey;
    private hashMsg;
    sendTx: ({ transaction, args, proposer, authorizations, payer, }: {
        transaction: any;
        args: any;
        proposer: any;
        authorizations: any;
        payer: any;
    }) => Promise<any>;
    executeScript<T>({ script, args }: {
        script: any;
        args: any;
    }): Promise<T>;
    getLatestBlockHeight(): Promise<any>;
}
export { FlowService };
