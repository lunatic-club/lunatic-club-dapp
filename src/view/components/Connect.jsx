import React from 'react'
import {useWallet, WalletStatus} from '@terra-money/wallet-provider'
import {Typography} from '@mui/material'
import Button from '../ui-elements/asyncButton'
import styles from './styles'

const Wallet = () => {
  const classes = styles()
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
              <Typography variant='button' className={classes.buttonText}>Connect Terra Station</Typography>
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
