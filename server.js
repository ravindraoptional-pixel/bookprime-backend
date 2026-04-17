const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("BookPrime Backend Running 🚀");
});

app.get('/books', (req, res) => {
  res.json([
    { id: 1, name: "Atomic Habits", price: 299 },
    { id: 2, name: "Ikigai", price: 199 }
  ]);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running");
});
let orders = [];

// Save order
app.post('/place-order', (req, res) => {
  const order = req.body;
  orders.push(order);
  res.send("Order placed successfully");
});

// Get all orders (admin)
app.get('/orders', (req, res) => {
  res.json(orders);
});
