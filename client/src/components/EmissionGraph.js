import React, { Component } from 'react'
import { Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';
import BarChart from './BarChart';

class EmissionGraph extends Component {
    chartRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            year: new Date().getFullYear()
        }
    }
    
    componentDidMount() {
        this.props.getItems();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
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
        const { year } = this.state;
        console.log(items)
        const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const yearRange = [2021, 2020];

        if(items.length > 0){
            return (
                <div className="dashboard-panel">
                    <h2>Total Group Emissions</h2>
                    <Form>
                        <FormGroup>
                            <Input type="select" name="year" id="year" onChange={this.onChange}>
                                {yearRange.map(year => {
                                    return <option>{year}</option>
                                })}
                            </Input>
                        </FormGroup>
                    </Form>
                    <BarChart
                        data={this.getYearlyEmissions(items, year)}
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