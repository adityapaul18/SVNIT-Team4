const fs = require('fs');

const filteredData = async (key, startDate, endDate) => {
  var data = fs.readFileSync('Stock_List.json');

  const jsonData = await JSON.parse(data);
  const filteredData = jsonData.filter((item) => item.key === key);
  const simplifiedData = filteredData.map((item) => {
    return {
      symbol: item.symbol,
      open: item.open,
      close: item.close,
      high: item.high,
      low: item.low,
      volume: item.volume,
      date: new Date(item.date),
    };
  });

  const dataByDate = simplifiedData.filter(
    (item) => item.date >= startDate && item.date <= endDate
  );
  if (!startDate && !endDate) {
    return simplifiedData;
  } else return dataByDate;
};

module.exports = filteredData;
