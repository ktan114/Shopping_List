const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const items = require("./routes/api/items");

const server = express();

server.use(express.json());

require("dotenv").config();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
server.use("/api/items", items);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  server.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFILE(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Connect to Server
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server started on port: ${port}`));
