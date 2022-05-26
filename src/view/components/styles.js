import makeStyles from '@mui/styles/makeStyles'

export default makeStyles(theme => ({
  button: {
    backgroundColor: theme.palette.common.charm,
    borderRadius: '5px',
    '&:hover': {
      transition: 'none !important',
      backgroundColor: theme.palette.common.charm
    }
  },
  buttonText: {
    marginTop: '5px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '22px'
    }
  },
  addressText: {
    marginTop: '5px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px'
    }
  },
  fullScreenBg: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    zIndex: -1,
    display: 'block',
  },
  viceFullscreenBgVideo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 'auto',
    height: 'auto',
    minWidth: '100%',
    minHeight: '100%',
    zIndex: 2,
    transform: 'translate(-50%, -50%)'
  },
  inputBg: {
    backgroundColor: '#FFF',
    fontFamily: 'Fugaz One'
  },
  sendBtn: {
    marginTop: '10px !important'
  },
  inputFieldLabel: {
    color: '#1976d2 !important',
    fontFamily: 'Fugaz One !important'
  }
}))
