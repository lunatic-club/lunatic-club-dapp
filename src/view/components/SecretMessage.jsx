import React, {useState} from 'react'
import {Grid} from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '../ui-elements/asyncButton'
import styles from './styles'

const SecretMessage = props => {
  const classes = styles()
  const {onSubmitMsg, loading} = props
  const [msg, setMsg] = useState('')

  const handleChange = e => {
    setMsg(e.target.value)
  }

  return (
    <Grid container justifyContent='center'>
      <TextField
        id='msg'
        classes={{root: classes.inputBg}}
        label='Remembrance Message'
        InputLabelProps={{classes: {root: classes.inputFieldLabel}}}
        variant='outlined'
        value={msg}
        fullWidth
        onChange={handleChange}
      />
      <Button
        customClasses={{root: classes.sendBtn}}
        variant='contained'
        size='large'
        onClick={() => onSubmitMsg(msg)}
        loading={loading}
      >
        Reincarnate
      </Button>
    </Grid>
  )
}

export default React.memo(SecretMessage)
