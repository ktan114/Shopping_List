const express = require('express');
const mongoose = require('mongoose');

const server = express();

server.use(express.json());

require('dotenv').config()

// DB Config
const db = require('./config/keys').mongoURL;