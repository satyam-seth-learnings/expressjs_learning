// const mongoose = require("mongoose");
import mongoose from "mongoose";

// const connectDB = (DATABASE_URL) => {
//     mongoose.connect(DATABASE_URL)
//         .then(() => {
//             console.log("Connected Successfully..");
//         })
//         .catch((err) => {
//             // console.log("Error hai connect nhi hoga");
//             console.log(err);
//         })
// }

const connectDB = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Connected Successfully..");
    }
    catch (err) {
        console.log(err);
    }
}

export default connectDB;