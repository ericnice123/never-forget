import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, AppRegistry, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

// action functions
import { getCosts } from '../../actions/index';


class Costs extends Component {
    constructor( props ) {
        super( props );


        console.log(`screenWidth: ${this.props.screenWidth} screenHeight: ${this.props.screenHeight}`);
    }
    
    componentDidMount() {
        this.props.getCosts();
    }

    render() {
        if(this.props.costs !== null) {
            return(
                this.props.costs.map( element => {
                    return(
                        <View key={element.id} style={styles.container}>
                            <View style={[styles.colorBox, {backgroundColor: element.color}]}>
                            </View>
                            <View style={styles.costAmountBox}>
                                <Text>{element.costAmount}</Text>
                            </View>
                        </View>
                    );
                })
            );
        }
        else {
            return (
                <View></View>
            );
        }
    }
}

let styles = StyleSheet.create({
    container: { 
        flex: 4,
        flexDirection: 'row',
        // [2018/12/16][Tsung]: TODO: change the height calculation to be something better without magic number
        height: Dimensions.get('window').height / 20 
    },
    colorBox: {
        flex: 1,
        margin: '5%'
    },
    costAmountBox: {
        flex: 3,
        margin: '5%'
    }
});

function mapStateToProps( state ) {
    return { costs: state.costs }
}

export default connect( mapStateToProps, {getCosts} )( Costs );