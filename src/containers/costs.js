import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, AppRegistry, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Costs extends Component {
    constructor( props ) {
        super( props );
    }
    
    render() {
        return(
            this.props.costs.map( element => {
                return(
                    <View key={element} style={styles.container}>
                        <View style={styles.box1}>
                        </View>
                        <View style={styles.box2}>
                            <Text>{element}</Text>
                        </View>
                    </View>
                    );
            })
        );
    }
}

let styles = StyleSheet.create({
    container: { 
        flex: 2,
        flexDirection: 'row'
    },
    box1: {
        flex: 1,
        backgroundColor: 'red'
    },
    box2: {
        flex: 1,
        backgroundColor: 'blue'
    }
});

function mapStateToProps( state ) {
    return { costs: state.costs }
}


export default connect(mapStateToProps, null)(Costs);