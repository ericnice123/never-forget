import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

class DateSelector extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        let data = [{
            value: 'Banana',
          }, {
            value: 'Mango',
          }, {
            value: 'Pear',
          }];
        
        return (
            <View>
                <Dropdown
                    label='Month'
                    data={data}
                />
                <Dropdown
                    label='Day'
                    data={data}
                />
                <Dropdown
                    label='Year'
                    data={data}
                />
            </View>            
        );        
    }
}

export default DateSelector;