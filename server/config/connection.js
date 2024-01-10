const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb+srv://rambriz91:*****@cluster0.dhjcdjc.mongodb.net/'
);

module.exports = mongoose.connection;
