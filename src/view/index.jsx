import React from 'react'
import {render} from 'react-dom'
import {getChainOptions, WalletProvider} from '@terra-money/wallet-provider'
import {Web3ReactProvider} from '@web3-react/core'
import App from './core/App'
import {setProvider} from '../services/provider'
import packageJson from '../../package.json'

window.CROSS_SEND_VERSION = packageJson.version

getChainOptions().then((chainOptions) => {
  render(
    <WalletProvider {...chainOptions}>
      <Web3ReactProvider getLibrary={setProvider}>
        <App />
      </Web3ReactProvider>
    </WalletProvider>,
    document.getElementById('root'),
  )
})
