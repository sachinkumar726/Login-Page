const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env file

const uri = process.env.MONGODB_URI;

async function connectDB() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log('Connected to MongoDB');
    return client;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = connectDB;
