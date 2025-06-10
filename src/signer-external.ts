import {Signer} from './keypair';

export interface SignerAction extends Signer {
  sign(message: Buffer): Promise<Buffer>;
}
