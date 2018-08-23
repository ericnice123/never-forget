import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components
import HomePage from './src/components/home_page';

export default class App extends React.Component {
  render() {
    return (
      <HomePage/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
