import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import artist from './artist'

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    artist
  })

export default rootReducer
