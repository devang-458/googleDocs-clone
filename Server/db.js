// db.js

import mongoose from 'mongoose';

const Connection = async () => {
  try {
    const uri = process.env.DATABASE_URL;

    if (!uri) {
      throw new Error('MongoDB URI is not provided');
    }

    mongoose.set('strictQuery', false); 

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
};

export default Connection;
