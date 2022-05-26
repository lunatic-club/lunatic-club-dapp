import React, {useState, useEffect, useContext} from 'react'
import {useWeb3React} from '@web3-react/core'
import {Grid, Typography} from '@mui/material'
import {Context} from '../core/Store'
import {setEthAccount} from '../../data/actions'
import {
  connectWallet,
  getAccounts,
  changeNetwork
} from '../../services/provider'
import Button from '../ui-elements/asyncButton'
import styles from './styles'

const noop = () => {}

const EthWalletConnect = props => {
  const {
    onChainIdChange = noop,
    onMessage = noop
  } = props
  const [state, dispatch] = useContext(Context)
  const {account: coreAccount} = useWeb3React()
  const [account, setAccount] = useState(coreAccount)
  const [chainId, setChainId] = useState()
  const [isDisconnectShown, setIsDisconnectShown] = useState(false)
  const classes = styles()

  useEffect(() => {
    setAccount(coreAccount)
  }, [coreAccount])

  useEffect(() => {
    dispatch(setEthAccount(account))
  }, [account])

  useEffect(() => {
    onChainIdChange(chainId)
  }, [chainId])

  useEffect(() => {
    if(chainId && Number(chainId) !== Number(process.env.SUPPORTED_CHAIN_ID)) {
      changeNetwork()
    }
  }, [chainId])

  const onConnect = async () => {
    try {
      const provider = await connectWallet()
      setChainId(Number(provider.chainId))
      // eslint-disable-next-line no-underscore-dangle
      const accounts = await getAccounts()
      setAccount(accounts[0])

      provider.on('accountsChanged', accounts => {
        setAccount(accounts[0])
      });

      provider.on('chainChanged', chain => {
        setChainId(Number(chain))
      });
    }
    catch(e) {
      onMessage('Something went wrong please make sure you are connected to the ethereum network')
    }
  }

  const onDisconnect = () => {
    setAccount()
  }

  const formatEthAddress = address => `${address.slice(0, 8)}...${address.slice(address.length - 8, address.length)}`

  const renderConnected = () => isDisconnectShown ? (
    <Grid
      container
      item
      xs={12}
      justifyContent='flex-end'
      onMouseOver={() => setIsDisconnectShown(true)}
      onMouseOut={() => setIsDisconnectShown(false)}
    >
      <Button variant='contained' size='large' onClick={onDisconnect} className={classes.button}>
        <Typography variant='button' className={classes.buttonText}>DISCONNECT</Typography>
      </Button>
    </Grid>
  ) : (
    <Grid container justifyContent='flex-end'>
      <Typography
        variant='body2'
        className={classes.addressText}
        onMouseOver={() => setIsDisconnectShown(true)}
        onMouseOut={() => setIsDisconnectShown(false)}
      >
        {formatEthAddress(account)}
      </Typography>
    </Grid>
  )

  return <Grid container justifyContent='flex-end'>
    {account ? (
      null // renderConnected()
    ) : (
      <Grid container item xs={12} justifyContent='flex-end'>
        <Button variant='contained' size='large' onClick={onConnect} className={classes.button}>
          <Typography variant='button' className={classes.buttonText}>CONNECT</Typography>
        </Button>
      </Grid>
    )}
  </Grid>
};

export default EthWalletConnect
