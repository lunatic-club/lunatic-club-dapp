import makeStyles from '@mui/styles/makeStyles'

export default makeStyles(theme => ({
  stepLabel: {
    color: '#FFF',
    fontFamily: 'Fugaz One'
  },
  
  existingTxhashLink: {
    fontSize: '1rem',
    textAlign: 'right',
    marginTop: '50px',
    color: '#ffd63d',
    
    '&:hover': {
      cursor: 'pointer',
    }
  }
}))
