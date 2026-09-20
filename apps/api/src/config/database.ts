import mongoose, { Mongoose } from "mongoose";

const connectDatabase = async function () {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) throw new Error("MONGODB_URI is not defined");

  await mongoose.connect(mongoUri);

  console.log("MonogDB connected");
};
