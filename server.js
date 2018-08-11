const express = require("express");
const mongoose = require("mongoose");

const server = express();

server.use(express.json());

require("dotenv").config();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Connect to Server
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server started on port: ${port}`));
