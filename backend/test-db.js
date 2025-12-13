// test-db.js
const mongoose = require('mongoose');
require('dotenv').config();

async function tryConnect(uri) {
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
    console.log('TEST: Connected to MongoDB OK using URI:', uri.startsWith('mongodb+srv') ? 'SRV' : 'NON-SRV');
    await mongoose.disconnect();
  } catch (err) {
    console.error('TEST: MongoDB connection failed:', err && err.message ? err.message : err);
    process.exit(1);
  }
}

(async () => {
  const raw = process.env.MONGO_URI;
  if (!raw) {
    console.error('TEST: MONGO_URI not found in .env');
    process.exit(1);
  }

  try {
    await tryConnect(raw);
    process.exit(0);
  } catch (e) {
    process.exit(1);
  }
})();
