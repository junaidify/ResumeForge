import "dotenv/config";
import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL!);
    console.log(`MongoDB connected with: ${connect.connection.host} `);
  } catch (err) {
    console.log(`MongoDB failed to connect with error: ${err}`);
    process.exit(1);
  }
};

module.exports = connectMongoDB;
