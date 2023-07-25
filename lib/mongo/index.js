import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    if (!global._mongoClient) {
      console.log("connecting to DB");
      global._mongoClient = await mongoose.connect(process.env.MONGODB_URI);
    }
    const client = global._mongoClient;
    return client;
  } catch (err) {
    console.log("db connection error");
    console.log(JSON.stringify(err));
  }
};
