import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import Reactotron from '../ReactotronConfig'
import reducers from './reducers'
import sagas from './sagas'

const persistConfig = {
  key: 'root',
  storage
}

export default () => {
  const sagaMonitor = Reactotron.createSagaMonitor()
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  const persistedReducer = persistReducer(persistConfig, reducers)

  const store = __DEV__ ? Reactotron.createStore(persistedReducer, applyMiddleware(sagaMiddleware))
    : createStore(persistedReducer, applyMiddleware(sagaMiddleware))
  const persistor = persistStore(store)

  sagaMiddleware.run(sagas)

  return { store, persistor }
}
