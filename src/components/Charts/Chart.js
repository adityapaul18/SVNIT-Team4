import React, { useEffect, useState } from 'react'
import CandlestickChart from '../financialcharts/CandlestickChart';
import OhlcChart from '../financialcharts/OHLCChart'
import './Chart.css'

function Chart({ chartdata }) {
    const [d, setd] = useState(1)
    
    var data = [];
    useEffect(() => {
    const fn = () => {
        chartdata.forEach((chartd) => {
            data.push(
                {
                    x: new Date(chartd.date),
                    y: [chartd.open, chartd.high, chartd.low, chartd.close],
                }
            );
        });
        console.log(data)
    }

       fn()
    }, [chartdata])
    return (
        <div className="ChartContainer" >
            <div className="ChartBox">
              <OhlcChart data={data} /> 
              <CandlestickChart data={data}/>
            </div>
        </div>
    )
}

export default Chart
