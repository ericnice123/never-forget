// Libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, AppRegistry, ScrollView, TouchableOpacity } from 'react-native';
import PieChart from 'react-native-pie-chart';

// redux
import { connect } from 'react-redux';

// action functions
import { getCosts } from '../../actions/index';

class PieChartSummary extends Component {
    constructor(props) {
        super(props);
    }

    /*componentDidMount() {
        return fetch('http://localhost:3000/testJson')
        .then((response) => response.json())
        .then((responseJson) => {
            responseJson.costElements.map(element => {
                console.log(element);
            })
        })
        .catch((error) =>{
            console.error(error);
        });
    }*/

    componentDidMount() {
        console.log("calling getCosts");
        this.props.getCosts();
    }

    render() {
        const screenWidth = Dimensions.get('window').width;
        const chart_wh = screenWidth / 2;

        series = [];
        colories = [];
        
        if(this.props.costs !== null) {
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
        else {
            return (
                <View></View>
            )
        }
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

export default connect( mapStateToProps, { getCosts } )( PieChartSummary );