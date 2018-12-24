import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

class MonthlySummaryScreen extends Component
{
    render () {
        return (
            <View style={styles.screenContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleTextStyle}>Montly Summary</Text>
                </View>
                <View style={styles.summaryContainer}>
                    <ScrollView>
                    </ScrollView>
                </View>
            </View>
            
        );
    }
}

let styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleTextStyle: {
        fontSize: 25
    },
    summaryContainer: {
        flex: 9,
        borderRadius: 20,
        borderWidth: 5,
        margin: '1%'
    },
    screenContainer: {
        flex: 10
    }
});

export default MonthlySummaryScreen;