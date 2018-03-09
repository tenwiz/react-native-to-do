import React, { Component } from 'react'
import {AppContainer} from "./containers/App/AppContainer"
import {Provider} from "react-redux"
import configureStore from './configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import codePush from "react-native-code-push"

const { store, persistor } = configureStore()
const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer/>
        </PersistGate>
      </Provider>
    )
  }
}

export default codePush(codePushOptions)(App)
