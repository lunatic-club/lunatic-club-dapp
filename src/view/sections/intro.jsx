import React from 'react'
import {Grid} from '@mui/material'
import Glitch from '../components/glitch'
import styles from './styles'

const Intro = props => {
  const classes = styles()

  return (
    <Grid
      container
      direction='row'
      justifyContent='flex-end'
      alignItems='center'
    >
      <Grid item xs={4}>
        <Glitch text='Terra Luna Revival' />
      </Grid>
      <Grid item xs={6} className={classes.nftImg}>
        <img width={500} height={500} src='/assets/nft.svg' />
      </Grid>
        <Grid item xs={12} className={classes.osLinkContainer}>
          <a className={classes.osLink} target="_blank" href='https://opensea.io/collection/lunatic-club'>View on OpenSea</a>
        </Grid>
    </Grid>
  )
}

export default React.memo(Intro)
