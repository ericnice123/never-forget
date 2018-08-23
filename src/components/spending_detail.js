import React, { Component } from 'react';
import { Text, View } from 'react-native';


class SpendingDetail extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return(
            <View>
                <Text>Current Month: </Text>
                <Text>Current Spending: </Text>
                <Text>Monthly Earning: </Text>
                <Text>Total Saving: </Text> 
            </View>                    
        );        
    }
}

export default SpendingDetail;