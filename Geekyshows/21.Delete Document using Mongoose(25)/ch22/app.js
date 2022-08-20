// Schema and Model
import express from "express";
import connectDB from "./db/connectdb.js";
import { deleteDocById, deleteOneDoc, deleteOneDocByAge, deleteManyDoc } from "./models/Student.js";

const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL);

// deleteDocById("62fe826ae9cbb01393fe6f18");
// deleteOneDoc("62fe84ebebd0c2ca70b90f1b");
// deleteOneDocByAge(29);
deleteManyDoc(27);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
}) 