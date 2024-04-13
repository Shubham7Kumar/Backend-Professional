import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express()
// Middleware ko use karna
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
/*
express.json([options])
It's used to parse incoming request bodies in JSON format.
When a client (like a web browser) sends data to your Express server, it often sends it in JSON format. 
This middleware helps your server understand and work with that JSON data.
*/

app.use(express.urlencoded({extended: true, limit: "16kb"}))
/*
ab koi client (jaise web browser) aapke Express server ko data bhejta hai, toh woh data kabhi kabhi URL-encoded format mein hota hai. 
Yeh middleware aapki server ko uss data ko samajhne aur uske saath kaam karne mein madad karta hai.
*/

app.use(express.static("public"))
/*
Jab koi client (jaise web browser) aapki Express server se kuch static files maangta hai, 
jaise ki HTML files, CSS files ya images, toh yeh middleware un files ko server se client tak bejta hai.
*/

app.use(cookieParser())
/*
Ye middleware Express application mein cookies ko parse karne mein madad karta hai. 
Jab koi client (jaise web browser) request karta hai, toh woh apne request ke saath cookies bhejta hai. 
Cookie-parser middleware in cookies ko parse karke Express request object mein ek "cookies" property ke andar daal deta hai, jisse hum unhe aasani se access kar sakte hain.
*/

export { app }