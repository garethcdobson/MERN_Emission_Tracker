import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';
import BarChart from './BarChart';

class EmissionGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        this.props.getItems();
    }

    getYearlyEmissions = (items, year) => {
        const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        const yearlyEmissionArray = [];

        months.map(month => {
            const result = this.getMonthlyEmissions(month, year, items);
            yearlyEmissionArray.push(result)
        })

       return yearlyEmissionArray;
    }

    getMonthlyEmissions = (month, year, items) => {
        const emissionArray = [];
        const results = items.filter(item => item.date.slice(0,7) === year + "-" + month);
        results.map(item => emissionArray.push(item.emissions));

        const totalMonthlyEmissions = emissionArray.reduce((a, b) => a + b, 0);
        return totalMonthlyEmissions.toFixed(1);
    }

    render() {
        const { items } = this.props.item;
        const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        if(items.length > 0){
            return (
                <div className="dashboard-panel">
                    <h2>Total Group Emissions</h2>
                    <BarChart
                        data={this.getYearlyEmissions(items, "2020")}
                        labels={monthLabels} 
                    />
                </div>
            )
        }

        return null;
    }
}

EmissionGraph.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    item: state.item,
})

export default connect(
    mapStateToProps, 
    { getItems }
)(EmissionGraph);