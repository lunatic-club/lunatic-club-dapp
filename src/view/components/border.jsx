import React from 'react'
import makeStyles from '@mui/styles/makeStyles'

const styles = makeStyles(theme => ({
  rootTop: {
    transform: 'rotate(180deg)'
  },
  svg: {
    height: '100px',
    width: '100%'
  }
}))

const Border = ({top}) => {
  const classes = styles()
  
  return (
    <div className={top ? classes.rootTop : null}>
      <svg className={classes.svg} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'>
        <path className='elementor-shape-fill' d='M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9'></path>
      </svg>
    </div>
  )
}

export default React.memo(Border)
