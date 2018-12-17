import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, AppRegistry, ScrollView, TouchableOpacity } from 'react-native';

class NewComponentScreen extends Component
{
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text>title</Text>
                </View>
                <View style={styles.enterBalanceContainer}>
                    <Text>enter balance</Text>
                </View>
                <View style={styles.enterCostContainer}>
                    <Text>cost name</Text>
                </View>
                <View style={styles.costsContainer}>
                    <Text>costs</Text>
                </View>
                <View style={styles.saveAndCancelContainer}>
                    <Text>save and cancel</Text>
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: { 
        flex: 7,
        flexDirection: 'column'
    },
    titleContainer: {
        flex: 1
    },
    enterBalanceContainer: {
        flex: 1
    },
    enterCostContainer: {
        flex: 1
    },
    costsContainer: {
        flex: 3
    },
    saveAndCancelContainer: {
        flex: 1
    }
})

export default NewComponentScreen;