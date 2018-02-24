import React, { Component } from 'react'
import {AppContainer} from "./containers/App/AppContainer"
import {Provider} from "react-redux"
import {applyMiddleware, createStore} from "redux";
import rootReducer from './redux'
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
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
