import makeStyles from '@mui/styles/makeStyles'

export default makeStyles(theme => ({
  container: {
    textAlign: 'center',
    width: '100%',
  },
  glitch: {
    fontSize: '5rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    position: 'relative',
    textShadow: '0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00',
    animation: 'glitch 725ms infinite',

    '& span': {
      position: 'absolute',
      top: 0,
      left: 0,
    },

    '& span:first-child': {
      animation: 'glitch 500ms infinite',
      clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 35%)',
      transform: 'translate(-0.04em, -0.03em)',
      opacity: 0.75,
    },
    '& span:last-child': {
      animation: 'glitch 375ms infinite',
      clipPath: 'polygon(0 65%, 100% 65%, 100% 100%, 0 100%)',
      transform: 'translate(0.04em, 0.03em)',
      opacity: 0.75
    }
  },

  nftImg: {
    textAlign: 'center',
  }
}))
