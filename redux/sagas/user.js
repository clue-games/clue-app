import { put, call, takeEvery, select, all, fork } from 'redux-saga/effects'
import { createAccount } from '../../services/tronweb'

function * createWallet (action) {
  try {
    const response = yield call(createAccount)
    yield put({ type: 'CREATE_WALLET_SUCCESS', data: response.data })
  } catch (error) {
    console.log(error)
    yield put({ type: 'CREATE_WALLET_FAIL', error: error })
  }
}

function * createWalletWatcher () {
  yield takeEvery('CREATE_WALLET', createWallet)
}

export default function * userSagas () {
  yield all([
    fork(createWalletWatcher)
  ])
}
