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