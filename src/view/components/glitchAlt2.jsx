import React from 'react'
import makeStyles from '@mui/styles/makeStyles'

const styles = makeStyles(theme => ({
  root: {
    animation: 'glitchAlt2 1s linear infinite',
    fontSize: '3rem',
    color: '#ffd63d',
    paddingTop: '50px',

    '&:before': {
      content: 'attr(title)',
      position: 'absolute',
      left: 0,
      animation: 'glitchTop 1s linear infinite',
      clipPath: 'polygon(0 0, 100% 0, 100% 33%, 0 33%)',
      '-webkit-clip-path': 'polygon(0 0, 100% 0, 100% 33%, 0 33%)'
    },

    '&:after': {
      content: 'attr(title)',
      position: 'absolute',
      left: 0,
      animation: 'glitchBottom 1.5s linear infinite',
      clipPath: 'polygon(0 67%, 100% 67%, 100% 100%, 0 100%)',
      '-webkit-clip-path': 'polygon(0 67%, 100% 67%, 100% 100%, 0 100%)'
    }
  }
}))

const GlitchAlt2 = ({text}) => {
  const classes = styles();

  return (
    <div className={classes.root} title={text}>{text}</div>
  )
}

export default React.memo(GlitchAlt2)
