export const CREATE_WALLET = 'CREATE_WALLET'
export const CREATE_WALLET_SUCCESS = 'CREATE_WALLET_SUCCESS'
export const CREATE_WALLET_FAIL = 'CREATE_WALLET_FAIL'

export const CLEAR_WALLET = 'CLEAR_WALLET'

export function createWallet () {
  return {
    type: CREATE_WALLET
  }
}
