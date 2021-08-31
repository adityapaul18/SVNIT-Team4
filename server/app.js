const fs = require('fs');

function symbolData(symbol,startdate,enddate){
    var data = fs.readFileSync('Stock List.json');

    const jsonData = JSON.parse(data);
    const filteredSymbol = jsonData.filter(item => item.symbol === symbol);
    const simplifiedData = filteredSymbol.map(item => {
        return {
            symbol: item.symbol,
            open: item.open,
            close:item.close,
            high:item.high,
            low:item.low,
            volume: item.volume,
            date:new Date(item.date)
        }
    });
    // console.log(startdate,enddate, simplifiedData[120].date);
    const dataByDate = simplifiedData.filter(item => (item.date >= startdate && item.date <= enddate))
    if(!startdate && !enddate){
        return simplifiedData;
    }
    else 
        return dataByDate;
}
const startDate = new Date(2021,5,20);
const endDate = new Date(2021,5, 26);
console.log(symbolData("DIS",startDate,endDate));
// console.log(symbolData("DIS"));
