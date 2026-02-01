import express from 'express';

const productApp = express.Router();

let products = [
  { id: 101, name: 'Laptop', price: 60000, brand: 'HP' },
  { id: 102, name: 'Mobile', price: 25000, brand: 'Samsung' }
];

// GET all products
productApp.get('/', (req, res) => {
  res.json(products);
});

// GET product by id
productApp.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  res.json(product || { message: 'Product not found' });
});

// GET product by brand
productApp.get('/brand/:brand', (req, res) => {
  const brand = req.params.brand;
  const data = products.filter(p => p.brand === brand);
  res.json(data);
});

// POST product
productApp.post('/', (req, res) => {
  products.push(req.body);
  res.json({ message: 'Product added', products });
});

// PUT product
productApp.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  products = products.map(p => p.id === id ? { ...p, ...req.body } : p);
  res.json({ message: 'Product updated', products });
});

// DELETE product
productApp.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  products = products.filter(p => p.id !== id);
  res.json({ message: 'Product deleted', products });
});

export default productApp;
