import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './home_screen';
import CostHistoryScreen from './cost_history_screen';

const AppNavigator = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    CostHistoryScreen: { screen: CostHistoryScreen }
});

export default AppNavigator