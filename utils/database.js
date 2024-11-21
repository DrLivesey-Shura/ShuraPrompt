import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  //   mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Already Connected to db");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "sharePrompt",
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    isConnected = true;
    console.log("Connected to db");
  } catch (error) {
    console.log("Error connecting to db: ", error.message);
  }
};
