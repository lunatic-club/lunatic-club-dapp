import React from 'react'
import classnames from 'classnames'
import makeStyles from '@mui/styles/makeStyles'

const styles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  hero: {
    textTransform: 'uppercase',
    fontSize: '2rem',
    lineHeight: 1,
    display: 'inline-block',
    color: '#fff',
    zIndex: 2,
    letterSpacing: '10px',
    /* Bright things in dark environments usually cast that light, giving off a glow */
    filter: 'drop-shadow(0 1px 3px)',
  },
  paths: {
    animation: 'paths 5s step-end infinite'
  }
}))

const GlitchAlt = ({text}) => {
  const classes = styles()

  return (
    <div className={classes.root}>
      <div className={classnames(classes.hero, classes.paths)}>{text}</div>
    </div>
  )
}

export default React.memo(GlitchAlt)
