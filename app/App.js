import React, { Component } from 'react'
import {AppContainer} from "./containers/App/AppContainer"
import {Provider} from "react-redux"
import {applyMiddleware, createStore} from "redux";
import rootReducer from './redux'
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    )
  }
}
