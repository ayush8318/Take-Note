const connectToMongo = require("./db");

const cors = require("cors");
const express = require("express");
const app = express();

connectToMongo(); // Connect to MongoDB

// Configure CORS

app.use(
  cors({
    origin: [
      "https://master--take-note-today.netlify.app",
      "https://www.master--take-note-today.netlify.app",
    ],
    methods: ["GET", "POST", "DELETE", "UPDATE"],
    allowedHeaders: ["Content-Type", "Authorization", "auth-token"],
  })
);

// Middleware
app.use(express.json()); // To use req.body

// Routes
app.get("/", (req, res) => {
  res.send("Hello world ayush");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

const port = 5000;
app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`);
});
