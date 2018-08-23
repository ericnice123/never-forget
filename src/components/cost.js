import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class Cost extends Component {
    constructor( props ) {
        super( props );

        this.state = { text: "hello" }
    }

    onPress() {
        console.log("FUCK ME!!!");
    }

    render() {
        return(
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                />
                <Button
                    onPress={this.onPress}
                    title="Submit"
                />
            </View>            
        );
    }
}

export default Cost;