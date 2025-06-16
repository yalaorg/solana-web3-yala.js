import {Keypair, Signer} from './keypair';
import {PublicKey} from './publickey';

export abstract class SignerAction extends Keypair implements Signer {
  constructor(pk: string | PublicKey) {
    let publicKey = pk instanceof PublicKey ? pk : new PublicKey(pk);
    super({
      publicKey: publicKey.toBytes(),
      secretKey: null as unknown as Uint8Array, // Secret key is not used
    });
  }

  abstract sign(message: Buffer): Promise<Buffer>;
}
