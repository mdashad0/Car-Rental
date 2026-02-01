// import mongoose from 'mongoose'

// const connectDB = async ()=>{
//     try {
//         mongoose.connection.on('connected',()=> console.log('Database Connected'))
//         await mongoose.connect(`${process.env.MOGODB_URI}/car-rental`)
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error("MONGODB_URI is missing in .env");
    }

    mongoose.connection.on("connected", () =>
      console.log("✅ Database Connected")
    );

    await mongoose.connect(`${mongoURI}/car-rental`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
