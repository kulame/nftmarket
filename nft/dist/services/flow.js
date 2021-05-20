"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowService = void 0;
const fcl = require("@onflow/fcl");
const sdk = require("@onflow/sdk");
const elliptic_1 = require("elliptic");
const sha3_1 = require("sha3");
const ec = new elliptic_1.ec("p256");
class FlowService {
    constructor(minterFlowAddress, minterPrivateKeyHex, minterAccountIndex) {
        this.minterFlowAddress = minterFlowAddress;
        this.minterPrivateKeyHex = minterPrivateKeyHex;
        this.minterAccountIndex = minterAccountIndex;
        this.authorizeMinter = () => {
            return async (account = {}) => {
                const user = await this.getAccount(this.minterFlowAddress);
                const key = user.keys[this.minterAccountIndex];
                let sequenceNum;
                if (account.role.proposer) {
                    sequenceNum = key.sequenceNumber;
                }
                const signingFunction = async (data) => {
                    return {
                        addr: user.address,
                        keyId: key.index,
                        signature: this.signWithKey(this.minterPrivateKeyHex, data.message),
                    };
                };
                return Object.assign(Object.assign({}, account), { addr: user.address, keyId: key.index, sequenceNum, signature: account.signature || null, signingFunction, resolve: null, roles: account.roles });
            };
        };
        this.getAccount = async (addr) => {
            const { account } = await fcl.send([fcl.getAccount(addr)]);
            return account;
        };
        this.signWithKey = (privateKey, msg) => {
            const key = ec.keyFromPrivate(Buffer.from(privateKey, "hex"));
            const sig = key.sign(this.hashMsg(msg));
            const n = 32;
            const r = sig.r.toArrayLike(Buffer, "be", n);
            const s = sig.s.toArrayLike(Buffer, "be", n);
            return Buffer.concat([r, s]).toString("hex");
        };
        this.hashMsg = (msg) => {
            const sha = new sha3_1.SHA3(256);
            sha.update(Buffer.from(msg, "hex"));
            return sha.digest();
        };
        this.sendTx = async ({ transaction, args, proposer, authorizations, payer, }) => {
            const response = await fcl.send([
                fcl.transaction `
        ${transaction}
      `,
                fcl.args(args),
                fcl.proposer(proposer),
                fcl.authorizations(authorizations),
                fcl.payer(payer),
                fcl.limit(9999),
            ]);
            return await fcl.tx(response).onceSealed();
        };
    }
    async executeScript({ script, args }) {
        const response = await fcl.send([fcl.script `${script}`, fcl.args(args)]);
        return await fcl.decode(response);
    }
    async getLatestBlockHeight() {
        const block = await sdk.send(await sdk.build([sdk.getBlock(true)]));
        const decoded = await sdk.decode(block);
        return decoded.height;
    }
}
exports.FlowService = FlowService;
//# sourceMappingURL=flow.js.map