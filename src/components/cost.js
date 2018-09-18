import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class Cost extends Component {
    constructor( props ) {
        super( props );

        this.state = { text: "hello" }
    }

    onPress() {
        console.log("Button Pressed!!!");
    }

    render() {
        return(
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                />
            </View>            
        );
    }
}

export default Cost;