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
                return <Text key={element}>{element}</Text>    
            })
        );
    }
}

function mapStateToProps( state ) {
    return { costs: state.costs }
}

export default connect(mapStateToProps, null)(Costs);