import React, { Component, useEffect, useState } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
function OhlcChart({data}) {
		const [state, setstate] = useState([])		
		useEffect(() => {
			setstate(data)
		}, [data])
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2",
			exportFileName: "Bank-of-America-Corporation-StockChart",
			title:{
				text: ""
			},
			axisX: {
				interval:1,
				intervalType: "month",
				valueFormatString: "MMM"
			},
			axisY: {
				includeZero:false,
				prefix: "$",
				title: "Price (in USD)"
			},
			data: [{
				type: "ohlc",
				yValueFormatString: "$###0.00",
				xValueFormatString: "MMM YYYY",
				dataPoints: state
			}]
		}
		
		return (
		<div>
			<h1>React OHLC Chart</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
		</div>
		);
	}


export default OhlcChart;