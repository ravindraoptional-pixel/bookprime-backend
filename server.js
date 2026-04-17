const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send("BookPrime Backend Running 🚀");
});

// Books API
app.get('/books', (req, res) => {
  res.json([
    { id: 1, name: "Atomic Habits", price: 299 },
    { id: 2, name: "Ikigai", price: 199 }
  ]);
});

// In-memory orders storage
let orders = [];

// Save order
app.post('/place-order', (req, res) => {
  console.log("📦 Order received:", req.body); // DEBUG

  const order = req.body;

  if (!order || !order.items) {
    return res.status(400).send("Invalid order");
  }

  orders.push(order);

  res.json({
    message: "Order placed successfully",
    totalOrders: orders.length
  });
});

// Get all orders
app.get('/orders', (req, res) => {
  res.json(orders);
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
