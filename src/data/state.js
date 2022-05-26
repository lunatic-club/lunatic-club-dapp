export const initState = {
  loading: false,
  ethAccount: null,
  notificationId: 0,
  terraTxHash: null,
  mintHash: null,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'notificationId':
      return {...state, notificationId: action.value}
    case 'loading':
      return {...state, loading: action.value}
    case 'ethAccount':
      return {...state, ethAccount: action.value}
    case 'terraTxHash':
      return {...state, terraTxHash: action.value}
    case 'mintHash':
      return {...state, mintHash: action.value}
  
    default:
      return state
  }
}
