import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>{
    try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  
      console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

    //   Typically, 'connection.host' would represent the hostname or IP address of the server where the database is hosted.  because there are different database hosting for tester ,developer ,production

    } catch (error) {
        console.log("MongoDB connection FAILED ", error);
        process.exit(1); // part of Nodejs have to learn
    }
}

export default connectDB;