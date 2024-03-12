// const Stock = require('../models/Stock');

// const getAllStocksByCountry = async (country) => {
//   try {
//     const stocks = await Stock.find({ country });
//     return stocks;
//   } catch (error) {
//     throw new Error(`Error fetching stocks from database: ${error.message}`);
//   }
// };

// const saveStock = async (stockData) => {
//   try {
//     const stock = new Stock(stockData);
//     await stock.save();
//     return stock;
//   } catch (error) {
//     throw new Error(`Error saving stock to database: ${error.message}`);
//   }
// };

// module.exports = { getAllStocksByCountry, saveStock };

const Stock = require('../models/Stock');

const getAllStocksByCountry = async (country) => {
  return await Stock.find({ country });
};


const saveStock = async (stockData) => {
    // console.log(stockData,'saveddstockData')
  const stock = new Stock(stockData);
//   console.log(stock,'stock')
  return await stock.save();
};

module.exports = { getAllStocksByCountry, saveStock };
