import React from 'react'
import {Grid, Link} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link'

const MintSuccess = ({txHash}) => {
  return (
    <Grid container alignItems='center'>
      <Grid item xs={9}>
        <span>You did it! Your LUNA has been reincarnated</span>
      </Grid>
      <Grid item xs={1} >
        <Link href={`${process.env.ETH_EXPLORER}/${txHash}`} target='_blank' rel='noreferrer'>
          <LinkIcon sx={{cursor: 'pointer', color: '#011224'}} fontSize='small'/>
        </Link>
      </Grid>
    </Grid>
  )
}

export default React.memo(MintSuccess)
