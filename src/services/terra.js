import {Fee, MsgSend} from '@terra-money/terra.js'
import {
  SignBytesFailed,
  Timeout,
  UserDenied,
} from '@terra-money/wallet-provider'

export const signMsg = async (connectedWallet, msg) => {
  if (!connectedWallet) {
    throw new Error('Not connected')
  }

  try {
    const signedBytes = await connectedWallet.signBytes(msg)
    signedBytes.result.signature = Array.from(signedBytes.result.signature) 

    return signedBytes
  } catch (error) {
    if (error instanceof UserDenied) {
      throw new Error('User Denied')
    } else if (error instanceof Timeout) {
      throw new Error('Timeout')
    } else if (error instanceof SignBytesFailed) {
      throw new Error('Sign Bytes Failed')
    } else {
      throw new Error('Unknown Error: ' + (error instanceof Error ? error.message : String(error)))
    }
  }
}

export const transferLuna = async (connectedWallet, recipient, amount) => {
  if (!connectedWallet) {
    throw new Error('Not connected')
  }

  try {
    const transactionMsg = {
      fee: new Fee(70000, '396550uluna'),
      msgs: [
        new MsgSend(connectedWallet.walletAddress, recipient, {
          uluna: amount,
        }),
      ],
    }

    return await connectedWallet.post(transactionMsg)
  } catch (error) {
    if (error instanceof UserDenied) {
      throw new Error('User Denied')
    } else {
      throw new Error(
        'Unknown Error: ' +
        (error instanceof Error ? error.message : String(error)),
      )
    }
  }
}
