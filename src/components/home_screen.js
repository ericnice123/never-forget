import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, AppRegistry } from 'react-native';
import { connect } from 'react-redux';

// Components
import SpendingDetail from './spending_detail';
import DateSelector from './date_selector';
import Cost from './cost';

class HomeScreen extends Component {    
    constructor(props) {
        super(props);
    }

    onPress() {
        Console.log("Pressed!");
    }

    render() {
        const screenWidth = Dimensions.get('window').width;
        const screenHeight = Dimensions.get('window').height;
        return (
            <View style={styles.container}>
                <View style={styles.viewStyleOne}>
                    <Text style={styles.textStyle}> 1 </Text>
                </View>
                <View style={styles.viewStyleTwo}>
                    <Text style={styles.textStyle}> 2 </Text>
                </View>
                <View style={styles.viewStyleThree}>
                    <Text style={styles.textStyle}> 3 </Text>
                </View>
            </View>
        );
    }    
}

/*const style = StyleSheet.create({
    container:
    {
        flex: 1,
        flexDirection: 'column'
        //justifyContent: 'center'
    },
    boxContainer:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    redBox:
    {
        flex: 2,
        backgroundColor: 'red'
    },
    blueBox:
    {
        backgroundColor: 'blue'
    },
    greenBox:
    {
        backgroundColor: 'green'
    }
})*/

let styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#4286f4'},
    viewStyleOne: {
        width:40,
        height:40,
        justifyContent: 'center',
        alignItems:'center', 
        backgroundColor:'red'
    },
    viewStyleTwo: {
        width:40,
        height:40,
        justifyContent: 'center',
        alignItems:'center', 
        backgroundColor:'blue'
    },
    viewStyleThree: {
        width:40,
        height:40,
        justifyContent: 'center',
        alignItems:'center', 
        backgroundColor:'green'
    },
    textStyle:{
        textAlign:'center'
    }
})

function mapStateToProps( state ) {
    return { cost: state.cost }
}

export default connect(mapStateToProps)(HomeScreen);