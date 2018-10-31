import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './home_screen';
import CostScreen from './cost_screen';
import NewComponentScreen from './new_component_screen';
import MonthlySummaryScreen from './monthly_summary_screen';

const AppNavigator = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    NewComponentScreen: { screen: NewComponentScreen },
    CostScreen: { screen: CostScreen },
    MonthlySummaryScreen: { screen: MonthlySummaryScreen }
});

export default AppNavigator