const connectToMongo = require("./db");

var cors = require("cors");
const express = require("express");
const app = express();

connectToMongo();
//above two lines are used to connect with mongodb
app.use(
  cors({
    origin: "*",
  })
);
// from express.js google
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello world ayush");
});

// Available routes

app.use(cors());
app.use(express.json()); //with the help of this line we are able to use req.body

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.listen(port, () => {
  console.log(`iNotebook backened listening on port ${port}`);
});
