import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducers from './src/reducers';

// Components
import AppNavigator from './src/components/app_navigator';


const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends React.Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
          <AppNavigator/>
      </Provider>
    );
  }
}

export default App

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
