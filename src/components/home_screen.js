import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, AppRegistry, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PieChart from 'react-native-pie-chart';

// Components
import SpendingDetail from './spending_detail';
import DateSelector from './date_selector';
import Cost from './cost';

class HomeScreen extends Component {    
    constructor(props) {
        super(props);
    }

    onPress() {
        console.log("Pressed!");
    }

    onPressViewMonthlySummary() {
        console.log("MontlySummary buttom pressed!");
    }

    onPressNewComponent() {
        console.log("Add new monthly component pressed!");
    }

    onPressAddCost() {
        console.log("Add a cost pressed!");
    }

    onPressRemoveCost() {
        console.log("Remove cost pressed!");
    }

    render() {
        const screenWidth = Dimensions.get('window').width;
        const screenHeight = Dimensions.get('window').height;
        const chart_wh = screenWidth / 2;
        const series = this.props.costs;
        const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']

        return (
            <View style={styles.container}>
                <View style={styles.viewStyleOne}>
                    <View style={styles.viewPieChart}>
                        <Text>pieChart</Text>
                        <PieChart
                            chart_wh={chart_wh}
                            series={series}
                            sliceColor={sliceColor}
                        />
                    </View>
                    <View style={styles.viewScrollCost}>
                        <ScrollView>
                            <Text style={styles.textStyle}> costScrollView </Text>
                            <Text style={styles.textStyle}> costScrollView </Text>
                            <Text style={styles.textStyle}> costScrollView </Text>
                            <Text style={styles.textStyle}> costScrollView </Text>
                            <Text style={styles.textStyle}> costScrollView </Text>
                            <Text style={styles.textStyle}> costScrollView </Text>
                            <Text style={styles.textStyle}> costScrollView </Text>
                            <Text style={styles.textStyle}> costScrollView </Text>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.viewStyleTwo}>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.onPressViewMonthlySummary}
                    >
                        <Text style={styles.textStyle}>View Montly Summary</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.onPressNewComponent}
                    >
                        <Text style={styles.textStyle}>Add New Month Component</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.onPressAddCost}
                    >
                        <Text style={styles.textStyle}>Add a Cost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.onPressRemoveCost}
                    >
                        <Text style={styles.textStyle}>Remove a Cost</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }    
}

let styles = StyleSheet.create({
    container: { 
        flex: 3,
        flexDirection: 'column',
        backgroundColor: '#4286f4'     
    },
    viewStyleOne: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor:'red'
    },
    viewStyleTwo: {
        flex: 2,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        //alignItems:'center',
        paddingHorizontal: Dimensions.get('window').width / 20
    },
    viewPieChart: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems:'center'
    },
    viewScrollCost: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: Dimensions.get('window').height / 20
    },
    buttonContainer: {
        flex: 1
    },
    textStyle:{
        textAlign:'center',
        fontSize: 20
    }
})

function mapStateToProps( state ) {
    return { costs: state.costs }
}

// Anything return from this action will end up as props on Booklist container
function mapDispatchToProps ( dispatch ) {
    // Whenever selectBook is called, the resule should passed to all reducers
    return bindActionCreators( { selectBook: selectBook }, dispatch );
}

export default connect(mapStateToProps, null)(HomeScreen);