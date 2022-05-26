import {InjectedConnector} from '@web3-react/injected-connector'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'
import {Web3, utils, Networks} from './web3'

let _web3 = null

export const injected = new InjectedConnector({supportedChainIds: [1, 4, 42]})

const initWeb3Provider = (provider, network) => {
  _web3 = Web3()
  _web3.init(network, provider)
}

export const getCurrentNetwork = chainId => Networks.fromChainId(
  utils.hexToNumber(Number(chainId))
)

export const setProvider = provider => {
  const chainId = Number(provider.chainId || provider._chainId || provider.networkVersion)

  initWeb3Provider(provider, getCurrentNetwork(chainId))
}

export const getWeb3Provider = () => {
  if(_web3 === null) {
    throw new Error('Provider not instantiated')
  }

  return _web3
}

export const connectWallet = async () => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: process.env.INFURA_URL // required
      }
    }
  };

  const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: false,
    providerOptions
  });

  const provider = await web3Modal.connect();

  setProvider(provider)

  return provider
}

export const getAccounts = () => _web3.inst.eth.getAccounts()

export const changeNetwork = async () => {
  try {
    // eslint-disable-next-line no-undef
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{
        chainId: utils.numberToHex(Number(process.env.SUPPORTED_CHAIN_ID))
      }]
    });
  }
  catch(switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if(switchError.code === 4902) {
      try {
        // eslint-disable-next-line no-undef
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: utils.numberToHex(Number(process.env.SUPPORTED_CHAIN_ID)),
            chainName: process.env.NETWORK_NAME,
            rpcUrls: [process.env.RPC_URL],
            nativeCurrency: {
              name: process.env.NATIVE_TOKEN,
              decimals: Number(process.env.NATIVE_TOKEN_DECIMALS),
              symbol: process.env.NATIVE_TOKEN_SYMBOL
            },
            blockExplorerUrls: [process.env.EXPLORER_URL]
          }]
        })
      }
      // eslint-disable-next-line no-empty
      catch(_) { }
    }
  }
}
