import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, AppRegistry, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

// Components
import Costs from '../../containers/homeScreenContainers/costs';
import PieChartCost from '../../containers/homeScreenContainers/pie_chart_summary';

class HomeScreen extends Component {    
    constructor(props) {
        super(props);

        this.onPressViewMonthlySummary  = this.onPressViewMonthlySummary.bind(this);
        this.onPressNewComponent        = this.onPressNewComponent.bind(this);
    }

    onPress() {
        console.log("Pressed!");
    }

    onPressViewMonthlySummary() {
        this.props.navigation.navigate('MonthlySummaryScreen');
    }

    onPressNewComponent() {
        this.props.navigation.navigate('NewComponentScreen');
    }

    onPressAddCost() {
        console.log("Add a cost pressed!");
    }

    onPressRemoveCost() {
        console.log("Remove cost pressed!");
    }

    render() {
        const costScreenWidth = Dimensions.get('window').width;
        const costScreenHeight = Dimensions.get('window').height;

        return (
            <View style={styles.container}>
                <View style={styles.viewStyleOne}>
                    <View style={styles.viewPieChart}>
                        <PieChartCost/>
                    </View>
                    <View style={styles.viewScrollCost}>
                        <ScrollView>
                            <Costs screenWidth={costScreenWidth} screenHeight={costScreenHeight} />
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
        backgroundColor: 'white'
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

// Anything return from this action will end up as props on home_Screen container
function mapDispatchToProps ( dispatch ) {
    // Whenever getCosts is called, the resule should passed to all reducers
    return bindActionCreators( { getCosts: getCosts }, dispatch );
}

export default connect(mapStateToProps, null)(HomeScreen);