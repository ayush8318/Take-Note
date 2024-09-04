const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://ayush:k_4._5.3nb2Tc5C@cluster0.ua0w0.mongodb.net/takenotes";

// add inotebook to mongoodb
// const mongoURI = "mongodb://localhost:27017/inotebook";

async function connectToMongo() {
  await mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected to Mongo Successfully"))
    .catch((err) => console.log(err));
}

module.exports = connectToMongo;
