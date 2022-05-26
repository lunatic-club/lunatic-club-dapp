import React, {useState, useEffect, forwardRef} from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import styles from './styles'

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

const Toast = ({children, isOpen, onClose, success=true}) => {
  const classes = styles()
  const [open, setOpen] = useState(isOpen)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    onClose()
  }

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <Snackbar
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      open={open}
      onClose={handleClose}
    >
      {
        success ? (
          <Alert classes={{root: classes.success}} onClose={handleClose} severity='success' sx={{width: '100%'}}>
            {children}
          </Alert>
        ) : (
          <Alert classes={{root: classes.error}}  severity='error' sx={{width: '100%'}}>
            {children}
          </Alert>
        )
      }
    </Snackbar>
  )
}

export default React.memo(Toast)
