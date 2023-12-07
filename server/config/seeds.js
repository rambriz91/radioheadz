const db = require('./connection');
const { User, Station } = require('../models');
const stationSeeds = require('./stationData.js');
const userSeeds = require('./userData.js');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Station', 'stations');
  await User.insertMany(userSeeds);

  await Station.insertMany(stationSeeds);

  console.log('users seeded');

  process.exit();
});
