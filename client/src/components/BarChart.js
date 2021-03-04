import React, { Component } from 'react'
import Chart from "chart.js";

Chart.defaults.global.legend.display = false

export default class BarChart extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
       this.buildChart();
    };

    componentDidUpdate() {
        this.buildChart();
    };

    buildChart = () => {
        const { data, labels } = this.props;
        const myChartRef = this.chartRef.current.getContext("2d");

        const gradient = myChartRef.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(1, '#429A86');   
        gradient.addColorStop(0, '#54C0A7');

        if(window.myCharts !== undefined)
        window.myCharts.destroy();
        
        window.myCharts = new Chart(myChartRef, {
            type: "bar",
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
        })

        return window.myCharts;
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