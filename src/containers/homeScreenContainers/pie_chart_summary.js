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
            <View>
                <Text>pieChart</Text>
                <PieChart
                    chart_wh={chart_wh}
                    series={series}
                    sliceColor={colories}
                />
            </View>
        )
    }
}

function mapStateToProps( state ) {
    return { costs: state.costs }
}

export default connect(mapStateToProps, null)(PieChartSummary);