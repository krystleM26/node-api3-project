const express = require('express');
const { logger } = require('./middleware/middleware')
const usersRouter = require('./users/users-router')

const server = express();
server.use('/api/users', usersRouter)
server.use(express.json())

server.use(logger)


// global middlewares and the user's router need to be connected here

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
