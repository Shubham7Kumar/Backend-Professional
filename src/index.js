// require('dotenv').config()
import dotenv from "dotenv"

import express from "express";
import connectDB from "./db/index.dbcon.js";
const app = express();

dotenv.config({path:"./env"})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
});














/*
// Approach first for Database connection
( async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // mongoose listener - 'on'
        app.on("errror",(error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR", error)
        throw error
    }
})()
*/
