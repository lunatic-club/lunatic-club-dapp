import React from 'react'
import {Grid} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import Border from '../components/border'
import GlitchAlt from '../components/glitchAlt'

const styles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  contentRoot: {
    height: '100%'
  },
  main: {
    background: '#011224',
    height: 'calc(100% - 280px)',
    marginTop: '-1px',
    marginBottom: '-1px'
  },
  nftImg: {
    textAlign: 'center',
  },
  txt: {
    fontSize: '1.65rem'
  },
  contentSection: {
    paddingRight: '5%'
  }
}))

const Project = props => {
  const classes = styles()

  return (
    <div className={classes.root}>
      <Border top={true} />
      <div className={classes.main}>
        <GlitchAlt text='What is the purpose of this project?'/>
        <Grid
          container
          direction='row'
          justifyContent='flex-end'
          alignItems='center'
          className={classes.contentRoot}
        >
          <Grid item xs={12} md={7} className={classes.nftImg}>
            <img width={500} height={500} src='/assets/nft.svg' />
          </Grid>
          <Grid item xs={12} md={5} className={classes.contentSection}>
            <p className={classes.txt}>
              Hello fellow LUNAtic! We've been through a storm lately but we're still here.
            </p>
            <p className={classes.txt}>
              LUNA is gradually fading out but not our community. Let's revive LUNA and make our community stronger.
            </p>
            <p className={classes.txt}>
              You have the unique chance to reincarnate your old Terra LUNA coins and become a member of the first LUNAtic club in the world.
            </p>
            <p className={classes.txt}>
              Mint your LUNAtic Club NFT now.
            </p>
            <p className={classes.txt}>
              P.S. Each NFT you mint will have a secret message of your choice stored on-chain forever. Only you will be able to reveal this message.
            </p>
          </Grid>
        </Grid>
      </div>
      <Border/>
    </div>
  )
}

export default React.memo(Project)
