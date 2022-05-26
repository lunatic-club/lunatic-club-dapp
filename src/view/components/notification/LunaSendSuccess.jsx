import React from 'react'
import {Grid, Link} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link'

const LunaSendSuccess = ({terraTxHash}) => {
  return (
    <Grid container alignItems='center'>
      <Grid item xs={11}>
        <span>Your Terra Luna spirit can rest now!</span>
      </Grid>
      <Grid item xs={1} >
        <Link href={`${process.env.TERRA_EXPLORER}/${terraTxHash}`} target='_blank' rel='noreferrer'>
          <LinkIcon sx={{cursor: 'pointer', color: '#011224'}} fontSize='small'/>
        </Link>
      </Grid>
    </Grid>
  )
}

export default React.memo(LunaSendSuccess)
