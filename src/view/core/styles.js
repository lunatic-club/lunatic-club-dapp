import makeStyles from '@mui/styles/makeStyles'

export default makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.colorGrayMedium,
    width: '100%',
  },
  pageContainer: {
    position: 'relative',
    minHeight: '100%',
    backgroundColor: theme.palette.background.body
  },
  bodyContainer: {
    flexGrow: 1,
    marginBottom: '100px'
  }
}))
