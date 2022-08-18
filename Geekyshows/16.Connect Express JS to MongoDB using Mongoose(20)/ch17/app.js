// Connect Express App to MongoDB using Mongoose with Authentication and Authorization
import express from "express";
import connectDB from "./db/connectdb.js";

const app = express();
const port = process.env.PORT || '3000';
// const DATABASE_URL = process.env.DATABASE_URL || "mongodb://geekyshows:123456@localhost:27017/schooldb";
// const DATABASE_URL = process.env.DATABASE_URL || "mongodb://geekyshows:123456@localhost:27017/schooldb?authsource=schooldb";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb";

// Database Connection
connectDB(DATABASE_URL);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})