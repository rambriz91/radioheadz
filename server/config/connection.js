require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb+srv://rambriz91:HQryejMRrxFNVi7o@cluster0.dhjcdjc.mongodb.net/`
);

module.exports = mongoose.connection;
