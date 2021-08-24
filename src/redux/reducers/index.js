import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import auth from './auth'

const persistAuth = {
  storage,
  key: 'auth'
}
const rootReducer = combineReducers({
  auth : persistReducer(persistAuth, auth),

})

export default rootReducer
