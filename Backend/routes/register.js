const express = require('express');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

const router = express.Router();
const uri = process.env.MONGODB_URI;

// Endpoint to handle user registration
router.post('/', async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    // Connect to MongoDB
    const client = new MongoClient(uri);
    await client.connect();

    // Access the users collection
    const db = client.db('loginDB');
    const usersCollection = db.collection('users');

    // Check if the email already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists. Please use a different email.' });
    }

    // Ensure password meets requirements (symbols, numbers, uppercase, lowercase, and minimum length)
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error: 'Password must contain at least one symbol, one number, one uppercase letter, one lowercase letter, and be at least 8 characters long.'
      });
    }

    // Hash the password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await usersCollection.insertOne({ fullName, email, password: hashedPassword });

    // Close the MongoDB connection
    await client.close();

    // Return success message
    res.status(201).json({ message: 'Registration successful. You can now login with your credentials.' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal Server Error. Please try again later.' });
  }
});

module.exports = router;
