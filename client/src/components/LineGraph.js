import React, { Component } from 'react'
import Chart from "chart.js";

Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0;

export default class LineGraph extends Component {
    chartRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            labels: this.props.labels,
            data: this.props.data
        }
    };
    
    componentDidMount() {
        const { data, labels } = this.state;
        const myChartRef = this.chartRef.current.getContext("2d");

        const gradient = myChartRef.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(1, '#afcae6');   
        gradient.addColorStop(0, '#deeeff');
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "CO2 Emissions (kg)",
                        data: data,
                        backgroundColor: gradient
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'CO2 Emissions (kg)'
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }]
                }    
            }
        });
    }

    render() {
        return (
            <div className="emission-graph">
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}