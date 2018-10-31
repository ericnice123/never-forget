import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import PieChart from 'react-native-pie-chart';
import SpendingCategories from './spending_categories';

class SpendingDetail extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const chart_wh = Dimensions.get('window').width / 2;
        const series = [123, 321, 123, 789, 537]
        const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']

        return(
            <PieChart
                chart_wh={chart_wh}
                series={series}
                sliceColor={sliceColor}
            />
        );        
    }
}

const style = StyleSheet.create({
    rowGrid: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    columnGrid: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    backgroundSkyBlue: {
        backgroundColor: 'blue'
    }
});

export default SpendingDetail;