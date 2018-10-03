import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components
import AppNavigator from './src/components/app_navigator';

class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
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
