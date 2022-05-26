import React, {useCallback, useState, useContext} from 'react'
import Box from '@mui/material/Box'
import {Grid} from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '../ui-elements/asyncButton'
import {Context} from '../core/Store'
import {setLoading} from '../../data/actions'
import {storeTxHash} from '../../services/cache'
import {transferLuna} from '../../services/terra'
import styles from './styles'

const LunaAmountForm = props => {
  const classes = styles()
  const [state, dispatch] = useContext(Context)
  const {connectedWallet, onSuccess, onError} = props
  const [amount, setAmount] = useState('')
  const [txResult, setTxResult] = useState(null)

  const sendLuna = useCallback(async () => {
    try {
      dispatch(setLoading(true))
      const tx = await transferLuna(connectedWallet, process.env.TREASURY, amount * 10**6)
      // store in the local storage
      storeTxHash(connectedWallet.walletAddress, tx.result.txhash)
      setTxResult(tx)
      onSuccess(tx.result.txhash)
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setLoading(false))
      onError(error.message)
    }
  }, [connectedWallet, amount])

  const handleChange = e => {
    setAmount(e.target.value)
  }

  return (
    <Box>
    {connectedWallet?.availablePost && (
      <Grid container justifyContent='center'>
        <TextField
          color='info'
          id='amount'
          classes={{root: classes.inputBg}}
          label='Amount'
          InputLabelProps={{classes: {root: classes.inputFieldLabel}}}
          variant='outlined'
          value={amount}
          fullWidth
          type='number'
          onChange={handleChange}
        />
        <Button
          customClasses={{root: classes.sendBtn}}
          variant='contained'
          size='large'
          onClick={sendLuna}
          loading={state.loading}
        >
          Commemorate
        </Button>
      </Grid>
    )}
    </Box>
  )
}

export default React.memo(LunaAmountForm)
