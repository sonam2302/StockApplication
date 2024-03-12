const StockService = require('../services/StockService');

const listStocksByCountry = async (req, res) => {
 
  const { country } = req.params;

  // console.log(req.params,'req.paramsssssssss',country,'country')
//  let country = req.params.country;

// Triming leading and trailing whitespace
// country = country.trim();

//  Converting to lowercase for case-insensitivity
// country = country.toLowerCase();
  console.log(req.params,'req.paramsssssssss',country,'country')

  try {
    const stocks = await StockService.fetchStocksByCountry(country);
    res.send({ stocks });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { listStocksByCountry };
