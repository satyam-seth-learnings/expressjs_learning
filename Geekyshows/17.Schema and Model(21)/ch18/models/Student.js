import mongoose from "mongoose";

// Defining the schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 50 },
    fees: { type: Number, required: true, min: 0, validate: { validator: v => v >= 5500.50 } },
    hobbies: { type: Array },
    isactive: { type: Boolean },
    comments: [{ value: { type: String }, publish: { type: Date, default: Date.now } }],
    join: { type: Date, default: Date.now },
});

// console.log(studentSchema.path('age'));

// Compiling Schema
const studentModel = mongoose.model('student', studentSchema);