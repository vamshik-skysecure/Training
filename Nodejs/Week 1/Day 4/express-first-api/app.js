// app.js
// Main entry point for our Express app

// 1) Load the express package
const express = require('express');
// 2) Create an Express application (an object with methods for routing, middleware, etc.)
const app = express();

// 3) Import our custom middleware and routes (modules in other files)
const logger = require('./middleware/logger');
const usersRouter = require('./routes/users');

// 4) Built-in middleware to parse JSON bodies from HTTP requests
//    This allows us to read req.body when client sends JSON.
app.use(express.json());

// 5) Use our logger middleware for every incoming request
app.use(logger);

// 6) Mount the usersRouter on the /users path.
//    Any request starting with /users will be handled by routes defined in routes/users.js
app.use('/users', usersRouter);

// 7) A simple root route to check server is running
app.get('/', (req, res) => {
  // send() sets status 200 by default and sends a plain text response
  res.send('Hello from Express — your API is running!');
});

// 8) Generic 404 handler: if no route matched above, this runs
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// 9) Error-handling middleware. Must take 4 args (err, req, res, next).
//    Express will call this when other middleware/route handlers call next(err).
app.use((err, req, res, next) => {
  console.error('Error middleware caught:', err);
  // send a 500 Internal Server Error with a JSON message
  res.status(500).json({ error: 'Internal Server Error' });
});

// 10) Start the server on port 3000 (or process.env.PORT if provided).
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
