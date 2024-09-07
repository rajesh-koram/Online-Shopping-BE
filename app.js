const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

// Initialize environment variables
dotenv.config();

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Mount routes
app.use('/api/users', userRoutes);

module.exports = app;