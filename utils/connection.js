const mongoose = require("mongoose");
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL is not defined");
  process.exit(1);
}

async function connectDb() {
  await mongoose.connect(DATABASE_URL);
  console.log("Connected to db");
  try {
  } catch (err) {
    console.log(err);
  }
}
module.exports = connectDb;
