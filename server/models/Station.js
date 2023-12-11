const { Schema, model } = require("mongoose");

const stationSchema = new Schema({
  frequency: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  callSign: {
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
  // favorite: { // shouldent this have a favorite or top station so we can show the image in the Caurosel?
  //   type: Boolean,
  //   required: true,
  // },
  // logo: {
  //   type: 
  // }

  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Station = model("Station", stationSchema);

module.exports = Station;
