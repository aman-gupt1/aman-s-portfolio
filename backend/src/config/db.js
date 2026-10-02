import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 4000,
    });
    isConnected = true;
    console.log(`[MongoDB Connected]: ${conn.connection.host}`);
  } catch (error) {
    isConnected = false;
    console.warn(`[MongoDB Warning]: Could not connect to MongoDB at ${uri}. Operating in graceful fallback mode for development.`);
    console.warn(`Error message: ${error.message}`);
  }
};

export const getDBStatus = () => isConnected;
