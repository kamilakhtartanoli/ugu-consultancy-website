const mongoose = require('mongoose');

const database = async () => {
  try {
    const url = process.env.mongodb_url; // must match your .env
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

module.exports = { database };