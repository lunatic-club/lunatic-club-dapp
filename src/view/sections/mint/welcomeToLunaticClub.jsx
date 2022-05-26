import React from 'react'
import Grid from '@mui/material/Grid'
import GlitchAlt2 from '../../components/glitchAlt2'
import makeStyles from '@mui/styles/makeStyles'

const styles = makeStyles(theme => ({
  linkContainer: {
    textAlign: 'center',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  link: {
    color: 'inherit',
    textDecoration: 'inherit',
    textTransform: 'inherit'
  }
}))

const WelcomeToLunaticClub = props => {
  const classes = styles()

  return (
    <Grid direction='column' container justifyContent='center' alignContent='center'>
      <Grid item>
        <GlitchAlt2 text='Welcome to LUNAtic Club' />
      </Grid>
      <Grid item className={classes.linkContainer}>
        <a className={classes.link} target="_blank" href='https://opensea.io/account'>View on OpenSea</a>
      </Grid>
    </Grid>
  )
}

export default React.memo(WelcomeToLunaticClub)
