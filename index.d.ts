declare module "ethereumjs-tx" {
  import { Buffer } from "safe-buffer";

  class Tx {
    constructor (raw: Buffer|Tx.TransactionProperties);
    sign(privateKey: Buffer): void;
    serialize(): string;
  }

  namespace Tx {
    interface TransactionProperties {
      nonce?: Buffer|number|string
      gasPrice?: Buffer|number|string
      gasLimit?: Buffer|number|string
      gas?: Buffer|number|string
      to?: Buffer|string
      value?: Buffer|string|number
      data?: Buffer|string
      v?: Buffer | number | string
      r?: Buffer | number | string
      s?: Buffer | number | string
      chainId?: number
    }
  }

  export = Tx
}
