import React from 'react'
import {useWallet, WalletStatus} from '@terra-money/wallet-provider'
import Button from '../ui-elements/asyncButton'

const Wallet = () => {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    connect,
    disconnect,
  } = useWallet()

  return (
    <>
      {/* {JSON.stringify({ status, network, wallets }, null, 2 )}  */}
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <>
        {availableConnectTypes.map((connectType, i) => (
          connectType === 'EXTENSION' ? (
            <Button
              key={i}
              variant='contained'
              size='large'
              onClick={() => connect(connectType)}
              loading={status === WalletStatus.WALLET_CONNECTED}
            >
              Connect
            </Button>
          ) : null
        ))}
        </>
      )}
      {/* {status === WalletStatus.WALLET_CONNECTED && (
        <Button
          variant='contained'
          size='large'
          onClick={() => disconnect()}
          loading={false}
        >
          Disconnect
        </Button>
      )} */}
    </>
  )
}

export default Wallet
