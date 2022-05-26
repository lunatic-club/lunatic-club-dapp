import React, {useState} from 'react'
import makeStyles from '@mui/styles/makeStyles'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '../ui-elements/asyncButton'


const styles = makeStyles(theme => ({
  title: {
    color: '#011224'
  },
  btn: {
    marginTop: '10px !important'
  }
}))

const TerraTxHashForm = props => {
  const classes = styles()
  const {onTxhash} = props
  const [terraTxHash, setTerraTxHash] = useState('')

  const handleChange = e => {
    setTerraTxHash(e.target.value)
  }

  return (
    <Grid container justifyContent='center'>
      <p className={classes.title}>Have you already sent your Terra LUNA? No problem, enter the transaction hash from the Terra Luna Network and will take care of that.</p>
      <>
        <TextField
          id="terraTxHash"
          label="Existing Transaction hash"
          variant="outlined"
          value={terraTxHash}
          fullWidth
          onChange={handleChange}
        />
        <Button
          variant='contained'
          customClasses={{root: classes.btn}}
          size='large'
          onClick={() => onTxhash(terraTxHash)}
        >
          Search
        </Button>
        </>
    </Grid>
  )
}

export default React.memo(TerraTxHashForm)
