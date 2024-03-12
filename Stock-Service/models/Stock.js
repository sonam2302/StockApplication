// // models/Stock.js
// const mongoose = require('mongoose');

// const stockSchema = new mongoose.Schema({
//   symbol: { type: String, required: true },
//   name: { type: String, required: true },
//   country: { type: String, required: true },
//   // Add other necessary fields
// });

// const Stock = mongoose.model('Stock', stockSchema);

// module.exports = Stock;


const mongoose = require('mongoose');

// const stockSchema = new mongoose.Schema(
//   {
//     symbol: { type: String, required: true },
//     name: { type: String, required: true },
//     country: { type: String, required: true },
//     "symbol": "ADMCM",
//             "name": "Admicom Oyj",
//             "currency": "EUR",
//             "exchange": "OMXH",
//             "mic_code": "XHEL",
//             "country": "Finland",
//             "type": "Common Stock"
//   },
//   { strict: true } // Enforce strict schema
// );
const stockSchema = new mongoose.Schema(
  {
    symbol:String,
    name:String,
    currency: String,
    exchange: String,
    mic_code: String,
    country:String,
    type: String
   },
  { strict: true } // Enforce strict schema
);

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
