// Schema and Model
import express from "express";
import connectDB from "./db/connectdb.js";
import {
    getAllDoc,
    getAllDocSpecificField,
    getSingleDoc,
    getSingleDocSpecificField,
    getDocByField,
    getDocByFieldSpecificFiled,
    getLimitedDoc,
    getSkipDoc,
    getDocCount,
    getSortedDoc,
    mixDoc,
    comDoc,
    logDoc
} from "./models/Student.js";

const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL);

// getAllDoc();
// getAllDocSpecificField();
// getSingleDoc();
// getSingleDocSpecificField();
// getDocByField();
// getDocByFieldSpecificFiled();
// getLimitedDoc();
// getSkipDoc();
// getDocCount();
// getSortedDoc();
// mixDoc();
// comDoc();
logDoc();

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
}) 