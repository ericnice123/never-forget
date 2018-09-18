import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

// Components
import HomeScreen from './src/components/home_screen';
import CostHistoryScreen from './src/components/cost_history_screen';

/*export default class App extends React.Component {
  render() {
    return (
      <HomeScreen/>
    );
  }

}*/

const App = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  CostHistoryScreen: { screen: CostHistoryScreen }
});

export default App

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
