const db = require("./connection");
const { User, Station } = require("../models");
const stationSeeds = require("./stationData.js");
const userSeeds = require("./userData.js");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("User", "users");
  await cleanDB("Station", "stations");
  await User.create(userSeeds); // to encript the passwords before saving.
  // await User.insertMany(userSeeds);

  await Station.insertMany(stationSeeds);

  console.log("users seeded");

  process.exit();
});
