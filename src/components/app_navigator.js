import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreenComponents/home_screen';
import CostScreen from './CostScreenComponents/cost_screen';
import NewComponentScreen from './NewComponentComponents/new_component_screen';
import MonthlySummaryScreen from './MonthlySummaryComponents/monthly_summary_screen';
import AddOrRemoveCostScreen from './AddRemoveCostComponents/add_remove_cost_screen';

const AppNavigator = createStackNavigator(
    {
        HomeScreen: {screen: HomeScreen},
        CostScreen: {screen: CostScreen},
        NewComponentScreen: {screen: NewComponentScreen},
        MonthlySummaryScreen: {screen: MonthlySummaryScreen},
        AddOrRemoveCostScreen: {screen: AddOrRemoveCostScreen}
    },
    {
        initialRouteName: 'HomeScreen',
    }
);

export default AppNavigator