// middleware/logger.js
// A simple middleware that logs request method and URL.

module.exports = function logger(req, res, next) {
    // req.method is 'GET', 'POST', etc. req.url is the path like '/users'
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    // Call next() so Express continues to the next middleware or route handler.
    next();
  };
  