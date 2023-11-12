const express = require ('express');
const morgan = require ('morgan');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth.routes.js')
const itemRoutes = require('./routes/item.routes.js')

const server = express()

server.use(morgan('dev'));
server.use(express.json())
server.use(cookieParser());

server.use("/api",authRoutes);
server.use("/api",itemRoutes);

module.exports = server;