// Schema and Model
import express from "express";
import connectDB from "./db/connectdb.js";
import { updateDocById, updateOneDoc, updateOneDocByAge, updateManyDoc } from "./models/Student.js";

const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL);

// updateDocById("62fe826ae9cbb01393fe6f18");
// updateOneDoc("62fe828ae9cbb01393fe6f18");
// updateOneDocByAge(27);
// updateManyDoc(27);
updateManyDoc(100);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
}) 