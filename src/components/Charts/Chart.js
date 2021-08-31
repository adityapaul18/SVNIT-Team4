
import React, { useState, useEffect } from 'react';
import './Chart.css';
import { Line } from 'react-chartjs-2';

const Chart = ({ chartdata }) => {
  const [graphData, setGraphData] = useState({});
  const data = [];
  chartdata.forEach((chartd) => {
    data.push(chartd.high);
  });

  useEffect(() => {
    setGraphData({
      labels: 'Stocks High Price',
      datasets: [
        {
          label: 'Highest Level',
          data: data,
          backgroundColor: ['rgba(75, 192, 192, 0.6)'],
          borderWidth: 4,
        },
      ],
    });
  }, [chartdata]);

  return (
    <div className='ChartContainer'>
      <div className='ChartBox'>
        <Line
          data={graphData}
          options={{
            responsive: true,
            title: { text: 'Highest Prices', display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
=======
import React from 'react'
import OhlcChart from '../financialcharts/OHLCChart'
import './Chart.css'

function Chart() {
    return (
        <div className="ChartContainer" >
            <div className="ChartBox">
                <OhlcChart />
            </div>
        </div>
    )
}

export default Chart
