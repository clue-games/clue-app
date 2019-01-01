const user = (state = {
  wallet: null
}, action) => {
  switch (action.type) {
    case 'SET_WALLET':
      return { ...state, wallet: action.wallet }

    case 'CLEAR_WALLET':
      return {
        wallet: null
      }

    default:
      return state
  }
}

export default user
