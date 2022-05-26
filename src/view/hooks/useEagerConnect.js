import {useState, useEffect} from 'react'
import {useWeb3React} from '@web3-react/core'
import {injected} from '../../services/web3'

export const useEagerConnect = () => {
  const {activate, active, error} = useWeb3React()
  const [tried, setTried] = useState(false)

  useEffect(() => {
    const run = async () => {
      const connector = injected

      try {
        activate(connector, undefined, true)
        window.ethereum.removeAllListeners(['networkChanged'])
      }
      catch(err) {
        setTried(true)
      }
    }
    run()
  }, [])

  useEffect(() => {
    if(!tried && active) {
      setTried(true)
    }
  }, [tried, active])

  return tried
}
