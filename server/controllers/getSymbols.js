const filteredData = require('./getFilteredData.js');

const getSymbols = async (req, res) => {
  try {
    const data = await filteredData();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

module.exports = getSymbols;
