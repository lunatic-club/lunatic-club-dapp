import api from './api'

export const requestRebirthPass = async (
  sig,
  terraAddress,
  terraTxHash,
  ethAddress,
  version,
  data
) => {
  const body = {
    sig,
    terraAddress,
    terraTxHash,
    ethAddress,
    version,
    data
  }

  return await api(
    `${process.env.API_URL}/passes`,
    'POST',
    {body}
  )
}
