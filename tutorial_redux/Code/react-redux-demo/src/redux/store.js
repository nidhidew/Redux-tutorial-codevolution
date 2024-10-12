import { legacy_createStore as createStore, applyMiddleware} from 'redux'
// import { cakeReducer } from './cakes/cakeReducer'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import { thunk } from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(logger,thunk))

export default store