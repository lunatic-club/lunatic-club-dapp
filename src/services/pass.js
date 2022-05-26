import {requestRebirthPass} from './rebirthPass'
import {signMsg} from './terra'
import {delay} from './utils'
import {utils} from './web3'
import {storePass} from './cache'
import {encodeData} from './nft'

export const getPass = async (connectedWallet, txHash, ethAccount, msg) => {
  await delay(1000)
  const sig = await signMsg(connectedWallet, msg)
  
  await delay(5000)

  // TODO: this will be provider by the user in the future
  const version = 1
  const data = ''

  // send sign to the back end
  const pass = await requestRebirthPass(
    sig.result,
    connectedWallet.walletAddress,
    txHash,
    ethAccount,
    version,
    data
  )

  storePass(connectedWallet.walletAddress, pass)

  return pass
}
