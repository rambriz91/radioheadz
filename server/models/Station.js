const { Schema, model } = require('mongoose');

const stationSchema = new Schema({
  frequency: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  isIframe: {
    type: Boolean,
    required: true,
  },
  isCompatible: {
    type: Boolean,
    required: true,
  },
  iframe: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
});

const Station = model('Station', stationSchema);

module.exports = Station;
