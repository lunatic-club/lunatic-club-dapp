import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import Box from '@mui/material/Box'

const styles = makeStyles(theme => ({
  title: {
    color: '#ffd63d',

    '&:hover': {
      cursor: 'pointer'
    }
  }
}))

const FaqBox = ({title, children}) => {
  const classes = styles();

  return (
    <Box>
      <h3 className={classes.title}>{title}</h3>
      {children}
    </Box>
  )
}

export default React.memo(FaqBox)
