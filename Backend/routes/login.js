const express = require('express');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const session = require('express-session');
const jwt = require('jsonwebtoken');

const router = express.Router();
const uri = process.env.MONGODB_URI;

// Set up session middleware
router.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
  })
);

// Endpoint to handle user login
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Connect to MongoDB
    const client = new MongoClient(uri);
    await client.connect();

    // Access the users collection
    const db = client.db('loginDB');
    const usersCollection = db.collection('users');

    // Find the user by email
    const user = await usersCollection.findOne({ email });

    // If user not found, return error
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password from the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If passwords don't match, return error
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Store user's email in the session
    req.session.email = email;

    // Generate JWT token
    const token = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '7d' }); // Token expires in 7 days

    // Close the MongoDB connection
    await client.close();

    // If authentication is successful, return success message and token
    res.status(200).json({ message: 'Login successful', token });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to handle user logout
router.post('/', (req, res) => {
  try {
    // Destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      // Session destroyed successfully
      res.status(200).json({ message: 'Logout successful' });
    });
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
