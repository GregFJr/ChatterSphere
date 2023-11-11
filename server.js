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

// Just a test route
app.get('/test', (req, res) => {
    res.json({ message: "Hello from test" });
  });


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
