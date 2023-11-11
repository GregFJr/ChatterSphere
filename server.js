const express = require('express');
const mongoose = require('./config/database');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

// Test route
app.get('/test', (req, res) => {
    res.json({ message: "Hello from test" });
  });

// TODO: Define routes here

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
