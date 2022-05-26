import React, {useState, useEffect, useContext} from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import {useConnectedWallet} from '@terra-money/wallet-provider'
import {Context} from '../../core/Store'
import {setLoading} from '../../../data/actions'
import Connect from '../../components/Connect'
import EthWalletConnect from '../../components/EthWalletConnect'
import TerraTxHashForm from '../../components/TerraTxHashForm'
import Modal from '../../ui-elements/modal'
import {getPass} from '../../../services/pass'
import LunaAmountForm from '../../components/LunaAmountForm'
import styles from './styles'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SendLunaStep = ({ethAccount, onSuccess, onError}) => {
  const classes = styles()
  const [state, dispatch] = useContext(Context)
  const connectedWallet = useConnectedWallet()
  const [terraTxHash, setTerraTxHash] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  useEffect(() => {
    if(terraTxHash) {
      onSuccess({type: 'txHash', value: terraTxHash})
    }
  }, [terraTxHash])


  useEffect(() => {
    const run = async () => {
      try {
        dispatch(setLoading(true))

        if(connectedWallet && terraTxHash && ethAccount) {
          const msg = Buffer.from(`${terraTxHash}::${ethAccount}`)
          const pass = await getPass(connectedWallet, terraTxHash, ethAccount, msg)
          
          onSuccess({type: 'pass', value: pass})
        }

        dispatch(setLoading(false))
      } catch (error) {
        dispatch(setLoading(false))
        onError({type: 'pass', error})
      }
    }

    run()
  }, [connectedWallet, terraTxHash, ethAccount])

  const renderEthWalletConnect = () => connectedWallet ? (
    <Grid item>
      <EthWalletConnect />
    </Grid>
  ) : null

  const handleExistingTxHash = txHash => {
    setIsModalOpen(false)
    setTerraTxHash(txHash)
  }

  const renderModal = () => isModalOpen ? (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <Box sx={style}>
        <TerraTxHashForm onTxhash={handleExistingTxHash} />
      </Box>
    </Modal >
  ) : null

  const renderSendLuna = () => ethAccount ? (
    <Grid item xs={10} md={6}>
      <p>Here we go! Start by selecting the amount of LUNA. This will record your TERRA Luna spirit on-chain and will provide you the reincarnation pass that will allow you to mint the LUNAtic Club NFT</p>
      <LunaAmountForm 
        connectedWallet={connectedWallet}
        onSuccess={setTerraTxHash}
        onError={error => onError({type: 'txHash', error})}
      />
      <p className={classes.existingTxhashLink} onClick={() => setIsModalOpen(true)}>Have you already completed this step before?</p>
    </Grid>
  ) : null 

  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <Connect />
      </Grid>
      {renderEthWalletConnect()}
      {renderSendLuna()}
      {renderModal()}
    </Grid>
  )
}

export default React.memo(SendLunaStep)
