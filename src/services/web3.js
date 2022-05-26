import Web3Core from 'web3'
import {InjectedConnector} from '@web3-react/injected-connector'
import {NetworkConnector} from '@web3-react/network-connector'
import Record from '@ppoliani/im-record'


export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 137, 80001]
})

export const Networks = {
  ETHEREUM: 'Ethereum',
  ROPSTEN: 'Ropsten',
  RINKEBY: 'Rinkeby',
  KOVAN: 'Kovan',
  BSC: 'Binance Smart Chain',
  POLYGON: 'Polygon',
  MUMBAI: 'Polygon Mumbai',
  fromChainId(chainId) {
    switch(Number(chainId)) {
      case 1:
        return this.ETHEREUM
      case 4:
        return this.RINKEBY
      case 42:
        return this.KOVAN
      case 3:
        return this.ROPSTEN
      case 56:
        return this.BSC
      case 137:
        return this.POLYGON
      case 80001:
        return this.MUMBAI
      default:
        throw Error(`Unknown chainId ${chainId}`)
    }
  }
}

const web3Utils = (new Web3Core()).utils

export const utils = {
  numberToHex: web3Utils.numberToHex,
  hexToNumber: web3Utils.hexToNumber,
  toHex: web3Utils.toHex,
  toWei: web3Utils.toWei,
  keccak256: web3Utils.keccak256,
  hexToAscii: web3Utils.hexToAscii,
  asciiToHex: web3Utils.asciiToHex,
  soliditySha3: web3Utils.soliditySha3,
  isAddress: web3Utils.isAddress,
  BN: num => new web3Utils.BN(num),
  fromWei: num => web3Utils.fromWei(num, 'ether')
}

const waitForReceipt = (self, txHash) => new Promise((resolve, reject) => {
  const poll = async () => {
    try {
      const receipt = await self.inst.eth.getTransactionReceipt(txHash)

      if(!receipt) {
        setTimeout(poll, 1000)
      }
      else if(!receipt.status) {
        // Throw same error message as sending the tx
        reject(new Error(`Transaction has been reverted by the EVM: ${JSON.stringify(receipt)}`))
      }
      else {
        resolve(receipt)
      }
    }
    catch(error) {
      reject(error)
    }
  }

  setTimeout(poll, 1000)
})

const sendTxAndWait = (
  self,
  contract,
  method,
  params,
  options = {},
  onTxHash = () => {}
) => new Promise(async (resolve, reject) => {
  const {gasMultiplier, ...rest} = options
  let gasLimit

  if(gasMultiplier) {
    try {
      gasLimit = Math.floor((await contract.methods[method](...params).estimateGas(rest)) * gasMultiplier)
    }
    catch(err) {
      reject(err)

      return
    }
  }

  contract.methods[method](...params).send({...rest, gasLimit}, (err, txHash) => {
    if(err) {
      reject(err)

      return
    }

    onTxHash(txHash)
    resolve(self.waitForReceipt(txHash))
  })
})

const getContract = (self, abi, address) => {
  const contract = new self.inst.eth.Contract(abi, address)
  return contract
}

const init = (
  self,
  network,
  provider,
) => {
  self.network = network
  self.inst = new Web3Core(provider)
}

export const Web3 = Record({
  network: undefined,
  inst: null,
  init,
  getContract,
  sendTxAndWait,
  waitForReceipt
})

