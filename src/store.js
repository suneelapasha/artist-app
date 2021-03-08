import { configureStore } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import logger from 'redux-logger'

import rootReducer from './slices'

export const history = createBrowserHistory()

export default function createSotre(preloadedState) {
  const store = configureStore({
    reducer: rootReducer(history),
    preloadedState,
    middleware: (getMiddleWare) =>
      getMiddleWare().prepend(routerMiddleware(history)).concat(logger)
  })

  return store
}
