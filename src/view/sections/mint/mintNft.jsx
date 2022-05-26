import React, {useState, useEffect, useContext} from 'react'
import Grid from '@mui/material/Grid'
import {Context} from '../../core/Store'
import {setLoading} from '../../../data/actions'
import SecretMessage from '../../components/SecretMessage'
import {reincarnate} from '../../../services/nft'

const MintNft =  ({pass, ethAccount, onSuccess, onError}) => {
  const [state, dispatch] = useContext(Context)

  const [remembranceMsg, setRemembranceMsg] = useState(null)

  useEffect(() => {
    const run = async () => {
      try {
        if(pass && remembranceMsg && ethAccount) {
          dispatch(setLoading(true))
          const result = await reincarnate(pass, ethAccount, remembranceMsg)
          onSuccess({type: 'mintTxHash', value: result.transactionHash})
          dispatch(setLoading(false))
        }
      } catch (error) {
        onError({type: 'mintTxHash', error})
        dispatch(setLoading(false))
      }
    }

    run()
  }, [pass, ethAccount, remembranceMsg])
  
  const renderSecretMessage = () => (
    <Grid item xs={10} md={6}>
      <p>Great! You have acquired the reincarnation pass and you're one step before joining the first LUNAtic Club in the world!</p>
      <p>Please select a secret message you would want to lock in the LUNAtic NFT forever. Be creative ;)</p>
      <SecretMessage
        onSubmitMsg={setRemembranceMsg}
        loading={state.loading}
      />
    </Grid>
  )

  return (
    <Grid container justifyContent='center'>
      {renderSecretMessage()}
    </Grid>
  )
}

export default React.memo(MintNft)
