import {bufferToHex} from 'ethereumjs-util'
import {encrypt} from '@metamask/eth-sig-util'
import {getWeb3Provider} from './provider'
import LUNAticsClubABI from '../abi/LUNAticsClubABI.json'
import {utils} from './web3'

const encryptRemembranceMessage = async (account, msg) => {
  const encryptionPublicKey = await ethereum
  .request({
    method: 'eth_getEncryptionPublicKey',
    params: [account], // you must have access to the specified account
  })

  return bufferToHex(
    Buffer.from(
      JSON.stringify(
        encrypt({
          publicKey: encryptionPublicKey,
          data: msg,
          version: 'x25519-xsalsa20-poly1305',
        })
      ),
      'utf8'
    )
  );
}

const decryptRemembranceMessage = async (account, encryptedMessage) => {
  return await ethereum
  .request({
    method: 'eth_decrypt',
    params: [encryptedMessage, account],
  })
}

const hashRemembranceMessage = remembranceMessage => {
  return utils.soliditySha3(
    {type: 'string', value: remembranceMessage},
  )
}

export const encodeData = value => utils.soliditySha3(
  {type: 'bytes', value}
)

export const revealRemembranceMessage = async (account, tokenId) => {
  const web3 = getWeb3Provider()

  const contract = web3.getContract(
    LUNAticsClubABI,
    process.env.LUNATICS_CLUB_CONTRACT
  )

  const metadata = await contract.methods.metadata(tokenId).call()

  console.log(await decryptRemembranceMessage(account, metadata.remembrance))
}

export const reincarnate = async (passData, account, remembranceMessage)=> {
  const web3 = getWeb3Provider()

  const contract = web3.getContract(
    LUNAticsClubABI,
    process.env.LUNATICS_CLUB_CONTRACT
  )

  // TODO: this will be provider by the user in the future
  const version = 1 // version 1 for Terra classic. In the future we will support Terra 2.0
  const data = '0x'

  const args = [
    version,
    hashRemembranceMessage(remembranceMessage),
    `${Number(passData.msg.amount) / 10**6}`,
    passData.msg.terraTxHash,
    data,
    passData.pass.r,
    passData.pass.s,
    passData.pass.v
  ]

  return await web3.sendTxAndWait(
    contract,
    'reincarnate',
    args,
    {from: account, value: process.env.MINT_FEE}
  )
}

