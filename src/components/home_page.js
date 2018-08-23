import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

// Components
import SpendingDetail from './spending_detail';
import DateSelector from './date_selector';
import Cost from './cost';

class HomePage extends Component {
    render() {
        return (
            <View>                               
                <SpendingDetail/>
                <DateSelector/>
                <Cost/>
            </View>                        
        );
    }    
}

export default HomePage;