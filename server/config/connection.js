const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb+srv://rambriz91:${process.env.DB_PASSWORD}@cluster0.dhjcdjc.mongodb.net/`
);

module.exports = mongoose.connection;
