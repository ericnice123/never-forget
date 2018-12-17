import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './homeScreenComponents/home_screen';
import CostScreen from './costScreenComponents/cost_screen';
import NewComponentScreen from './new_component_screen';
import MonthlySummaryScreen from './monthly_summary_screen';

const AppNavigator = createStackNavigator(
    {
        HomeScreen: {screen: HomeScreen},
        CostScreen: {screen: CostScreen},
        NewComponentScreen: {screen: NewComponentScreen},
        MonthlySummaryScreen: {screen: MonthlySummaryScreen}
    },
    {
        initialRouteName: 'HomeScreen',
    }
);

export default AppNavigator