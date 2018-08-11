const express = require('express');
const mongoose = require('mongoose');

const server = express();

server.use(express.json());

require('dotenv').config()

// DB Config
const db = require('./config/keys').mongoURL;

// Connect to Mongo
mongoose
.connect(db)
.then(() => console.log('MongoDB connect'))
.catch(err => console.log(err));

// Connect to Server
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server started on port: ${port}`));