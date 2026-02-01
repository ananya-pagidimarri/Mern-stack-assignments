import express from 'express';

const userApp = express.Router();

let users = [
  { id: 1, name: 'Ananya', age: 20 },
  { id: 2, name: 'Rahul', age: 22 }
];

// GET all users
userApp.get('/', (req, res) => {
  res.json(users);
});

// GET user by id
userApp.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);
  res.json(user || { message: 'User not found' });
});

// POST user
userApp.post('/', (req, res) => {
  users.push(req.body);
  res.json({ message: 'User added', users });
});

// PUT user
userApp.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  users = users.map(u => u.id === id ? { ...u, ...req.body } : u);
  res.json({ message: 'User updated', users });
});

// DELETE user
userApp.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  users = users.filter(u => u.id !== id);
  res.json({ message: 'User deleted', users });
});

export default userApp;
