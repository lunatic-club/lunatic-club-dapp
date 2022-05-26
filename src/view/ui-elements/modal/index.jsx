import React, {useEffect, useState} from 'react'
import Modal from '@mui/material/Modal'

const CustomModal = ({children, isOpen, onClose}) => {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      {children}
    </Modal>
  )
}

export default React.memo(CustomModal)
