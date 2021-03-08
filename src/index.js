import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import Storage from './helpers/storage'
import configureStore, { history } from './store'
import { initialState } from './slices/artist'

const getAdditionalState = () => {
  let additionalState = {}
  const artists = Storage.get('artists')
  const events = Storage.get('events')
  if (artists && events) {
    additionalState = {
      ...initialState,
      artists: JSON.parse(artists),
      events: JSON.parse(events)
    }
  }
  return { artist: additionalState }
}

const store = configureStore(getAdditionalState())
ReactDOM.render(
  <Provider store={store}>

    <ConnectedRouter history={history}>
     <App />
    </ConnectedRouter>
  
</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
