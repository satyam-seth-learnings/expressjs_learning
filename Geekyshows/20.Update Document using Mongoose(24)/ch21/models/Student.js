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

// Compiling Schema
const studentModel = mongoose.model('student', studentSchema);

// Update Document
const updateDocById = async (id) => {
    try {
        const result = await studentModel.findByIdAndUpdate(id, { name: "Sunil" });
        // const result = await studentModel.findByIdAndUpdate(id, { name: "Sameer" }, { returnDocument: "after" });
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}

// Update One Document
const updateOneDoc = async (id) => {
    try {
        const result = await studentModel.updateOne({ _id: id }, { name: "Sujit" });
        // const result = await studentModel.updateOne(
        //     { _id: id },
        //     { name: "Arjun" },
        //     { upsert: true }
        // );
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}

// Update One Document by Specific Field
const updateOneDocByAge = async (a) => {
    try {
        const result = await studentModel.updateOne({ age: a }, { name: "Mouse" });
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}

// Update Many Document
const updateManyDoc = async (a) => {
    try {
        const result = await studentModel.updateMany(
            { age: a },
            { name: "Dollar" }
        );
        // const result = await studentModel.updateMany(
        //     { age: a },
        //     { name: "Math" },
        //     { upsert: true }
        // );
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}



export { updateDocById, updateOneDoc, updateOneDocByAge, updateManyDoc };