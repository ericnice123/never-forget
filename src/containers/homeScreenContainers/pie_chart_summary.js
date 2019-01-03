// Libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, AppRegistry, ScrollView, TouchableOpacity } from 'react-native';
import PieChart from 'react-native-pie-chart';

// redux
import { connect } from 'react-redux';

class PieChartSummary extends Component {
    constructor(props) {
        super(props);
    }

    // TODO: Test the api call with redux
    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {

            this.setState({
            isLoading: false,
            dataSource: responseJson.movies,
            }, function(){

            });
            console.log("Hey Mother funcker!");
        })
        .catch((error) =>{
            console.error(error);
        });
    }

    render() {
        const screenWidth = Dimensions.get('window').width;
        const chart_wh = screenWidth / 2;

        series = [];
        colories = [];

        this.props.costs.map(element => {
            series.push(element.costAmount);
            colories.push(element.color);
        });
        
        return(
            <View style={styles.pieChartContainer}>
                <View style={styles.titleBox}>
                    <Text style={styles.titleStyle}>Current Cost View</Text>
                </View>
                <View style={styles.pieChartBox}>
                    <PieChart
                        chart_wh={chart_wh}
                        series={series}
                        sliceColor={colories}
                    />
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    pieChartContainer: {
        flex: 10,
        flexDirection: 'column'
    },
    titleBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    pieChartBox: {
        flex: 9
    },
    titleStyle: {
        fontSize: 20
    }
});


function mapStateToProps( state ) {
    return { costs: state.costs }
}

export default connect(mapStateToProps, null)(PieChartSummary);