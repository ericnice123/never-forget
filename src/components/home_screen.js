import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

// Components
import SpendingDetail from './spending_detail';
import DateSelector from './date_selector';
import Cost from './cost';

class HomeScreen extends Component {    
    constructor(props) {
        super(props);
    }

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

function mapStateToProps( state ) {
    return { cost: state.cost }
}

export default connect(mapStateToProps)(HomeScreen);