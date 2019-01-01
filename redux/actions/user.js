export const SET_WALLET = 'SET_WALLET'
export const CLEAR_WALLET = 'CLEAR_WALLET'

export function setWallet (wallet) {
  return {
    type: SET_WALLET,
    wallet
  }
}
