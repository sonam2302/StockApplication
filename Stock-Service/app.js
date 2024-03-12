const express = require('express');
const mongoose = require('mongoose');
const stockRoutes = require('./routes/stockRoutes');
const ConsulConfiguration = require("./consul-config.js");
const cors = require('cors')
const app = express();
ConsulConfiguration(app);
app.use(cors())
mongoose.connect('mongodb://localhost:27017/StocksDB');

app.use('/api', stockRoutes);

// const PORT = 9000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

app.listen(process.env.HOST_PORT, () => {
  console.log(`Server running on port ${process.env.HOST_PORT}`);
});
