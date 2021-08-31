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
