import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class AddOrRemoveCostScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.pageContainer}>
                <View style={styles.titleContainer}>
                    <View style={styles.textBox}>
                        <Text style={styles.titleTextStyle}>Add/Remove Cost</Text>
                    </View>
                </View>
                <View style={styles.enterCostContainer}>
                    <View style={styles.enterCostBox}>
                        <View style={styles.enterTextInputBox}>
                            <TextInput style={styles.textInputStyle}>Enter Cost</TextInput>
                        </View>
                        <View style={styles.addIconBox}>
                            <Icon
                                reverse
                                name='add'
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.costsScrollViewContainer}>
                    <ScrollView>

                    </ScrollView>
                </View>
                <View style={styles.saveAndCancelContainer}>
                    <View style={styles.saveAndCancelBox}>
                        <View style={styles.buttonBox}>
                            <TouchableOpacity>
                                <Text style={styles.textStyle}>Save</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonBox}>
                            <TouchableOpacity>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    pageContainer: {
        flex: 7
    },
    titleContainer: {
        flex: 1
    },
    enterCostContainer: {
        flex: 1
    },
    costsScrollViewContainer: {
        flex: 4,
        borderRadius: 20,
        borderWidth: 5,
        margin: '1%'
    },
    saveAndCancelContainer: {
        flex: 1
    },
    textBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    enterCostBox: {
        flex: 4,
        flexDirection: 'row'
    },
    enterTextInputBox: {
        flex: 3,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 20,
        borderWidth: 5,
        margin: '1%'
    },
    addIconBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    saveAndCancelBox: {
        flex: 2,
        flexDirection: 'row'
    },
    buttonBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 20,
        borderWidth: 5,
        margin: '1%'
    },
    titleTextStyle: {
        fontSize: 40
    },
    textInputStyle: {
        fontSize: 40
    },
    textStyle: {
        fontSize: 40
    }
});

export default AddOrRemoveCostScreen;