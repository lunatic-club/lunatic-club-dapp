import React, {useCallback, useState} from 'react'
import Box from '@mui/material/Box'
import {useConnectedWallet} from '@terra-money/wallet-provider'
import {signMsg} from '../../services/terra'

const SignMsg = props => {
  const {msg} = props
  const [signMsgError, setSignMsgError] = useState(null)
  const connectedWallet = useConnectedWallet()
  
  const sign = useCallback(async () => {
    try {
      const sig = await signMsg(connectedWallet, msg)
    } catch(error) {
      setSignMsgError(error.message)
    }
  })

  return (
    <Box>
      {signMsgError && <pre>{signMsgError}</pre>}
      {connectedWallet?.availableSignBytes &&
        <button onClick={() => sign()}>
          Sign Message
        </button>
      }
    </Box>
  )
}

export default React.memo(SignMsg)
