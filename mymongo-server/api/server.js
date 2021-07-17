const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const bookRoutes = require('./controllers/books');
server.use('/books', bookRoutes)

//Root route
server.get('/', (req, res) => res.send('Hello, book lover!'))

module.exports = { server }