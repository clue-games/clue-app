const user = (state = {
  wallet: null
}, action) => {
  switch (action.type) {
    case 'CREATE_WALLET_SUCCESS':
      return { ...state, wallet: action.wallet }

    default:
      return state
  }
}

export default user
