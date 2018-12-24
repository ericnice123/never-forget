import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class NewComponentScreen extends Component
{
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleBox}>New Component Page</Text>
                </View>
                <View style={styles.enterBalanceContainer}>
                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textInputBox}>Enter Balance</TextInput>
                    </View>
                    <View style={styles.signBox}>
                        <Icon
                            reverse
                            name='add'
                        />
                    </View>
                </View>
                <View style={styles.enterCostContainer}>
                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textInputBox}>Enter Cost Name</TextInput>
                    </View>
                    <View style={styles.signBox}>
                        <Icon
                            reverse
                            name='add'
                        />
                    </View>
                </View>
                <View style={styles.costsContainer}>
                    <ScrollView>

                    </ScrollView>
                </View>
                <View style={styles.saveAndCancelContainer}>
                    <View style={styles.saveAndCancelBox}>
                        <TouchableOpacity style={styles.saveBox}>
                            <Text style={styles.textStyle}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.saveAndCancelBox}>
                        <TouchableOpacity style={styles.cancelBox}>
                            <Text style={styles.textStyle}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleBox: {
        fontSize: 20
    },
    enterBalanceContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    enterCostContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    costsContainer: {
        flex: 3,
        borderRadius: 20,
        borderWidth: 5,
        margin: '1%'
    },
    saveAndCancelContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    saveAndCancelBox: {
        flex: 1
    },
    saveBox: {
        borderRadius: 20,
        borderWidth: 5,
        margin: '4%'
    },
    cancelBox: {
        borderRadius: 20,
        borderWidth: 5,
        margin: '4%'
    },
    textInputContainer: {
        flex: 2,
        borderRadius: 20,
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1%'
    },
    textInputBox: {
        fontSize: 25
    },
    signBox: {
        flex: 1,
        alignItems: 'center',
        marginTop: '5%'
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center'
    }
})

export default NewComponentScreen;