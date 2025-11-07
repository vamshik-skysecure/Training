// routes/users.js
// A small router that simulates a user list and demonstrates GET and POST routes.

const express = require('express');
const router = express.Router(); // create a router object

// In-memory "database" (simple array). Not persistent — for demo only.
const users = [
  { id: 1, name: 'Asha' },
  { id: 2, name: 'Ravi' }
];

// GET /users      -> return list of users
router.get('/', (req, res) => {
  // res.json() sends a JSON response (also sets Content-Type)
  res.json(users);
});

// GET /users/:id  -> return single user by id
router.get('/:id', (req, res) => {
  // req.params.id is a string from the URL path; convert to number
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    // If user not found, send 404 Not Found with JSON message
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

// POST /users     -> create a new user
router.post('/', (req, res) => {
  // Expect JSON body like { "name": "NewName" }
  const { name } = req.body;

  // Basic validation: name must exist
  if (!name || typeof name !== 'string') {
    // 400 Bad Request for invalid input
    return res.status(400).json({ error: 'Name is required and must be a string' });
  }

  // Create new user with incremental id
  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name: name.trim()
  };

  users.push(newUser);

  // 201 Created is the standard response for a successful POST that created a resource
  res.status(201).json(newUser);
});

module.exports = router; // export the router to be used in app.js
