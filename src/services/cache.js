export const setItem = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

export const getItem = key => {
  const item = window.localStorage.getItem(key)
  if(item) {
    return JSON.parse(item)
  }
  return null
}

export const removeItem = key => window.localStorage.removeItem(key)

export const storeTxHash = async (account, txHash) => {
  try {
    const key = `${account}::txHashes`
    const txHashes = JSON.parse(getItem(key)) || []

    if(txHashes.length == 0 || !txHashes.includes(txHash)) {
      txHashes.unshift(txHash)
      setItem(key, JSON.stringify(txHashes))
    }
  } catch(error) {
    console.error('Error storing tx hash', error.message)
  }
}

export const storePass = async (account, pass) => {
  try {
    const key = `${account}::passes`
    const passes = JSON.parse(getItem(key)) || []

    if(passes.length == 0 || !passes.includes(pass)) {
      passes.unshift(pass)
      setItem(key, JSON.stringify(passes))
    }
  } catch(error) {
    console.error('Error storing rebirth pass', error.message)
  }
}

export const getPendingPassRequests = async () => {}

export const getPendingMints = async () => {}
