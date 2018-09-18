import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// Components
import SpendingDetail from './spending_detail';
import DateSelector from './date_selector';
import Cost from './cost';

class HomeScreen extends Component {    
    render() {
        return (
            <View style={style.grid}>                               
                <SpendingDetail/>                
            </View>                        
        );
    }    
}

const style = StyleSheet.create({
    grid:
    {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        width: 500,
        height: 300,        
    }
})

export default HomeScreen;