import mongoose from "mongoose";

// Defining the schema
const studentSchema = new mongoose.Schema({
    // _id: Number,
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

// Retrieve All Documents 
const getAllDoc = async () => {
    const result = await studentModel.find();
    console.log(result);

    // result.forEach(
    //     (item) => console.log(
    //         item.name,
    //         item.age,
    //         item.fees.toString(),
    //         item.hobbies[0],
    //         item.hobbies[1],
    //         item.isactive,
    //         item.comments[0].value,
    //         item.comments[0].publish,
    //         item.join
    //     )
    // );
}

// Retrieve All Documents with Specific Fields
const getAllDocSpecificField = async () => {
    // const result = await studentModel.find().select('name age'); // Include
    // const result = await studentModel.find().select(['name', 'age']); // Include
    // const result = await studentModel.find().select({ name: 1, age: 1 }); // Include

    // const result = await studentModel.find().select('-name -age'); // Exclude
    // const result = await studentModel.find().select(['-name', '-age']); // Exclude
    // const result = await studentModel.find().select({ name: 0, age: 0 }); // Exclude

    const result = await studentModel.find({}, 'name age');

    console.log(result);

}

// Retrieve Single Document
const getSingleDoc = async () => {
    const result = await studentModel.findById('62fe85f4fe302fa48b5c5826');
    console.log(result);
    // console.log(result._id.getTimestamp(), result.name, result.age, result.fees.toString());
}

// Retrieve Single Document with Specific Field
const getSingleDocSpecificField = async () => {
    const result = await studentModel.findById('62fe85f4fe302fa48b5c5826', 'name age');
    console.log(result);
}

// Retrieve Document by Field
const getDocByField = async () => {
    const result = await studentModel.find({ name: 'Sonam' });
    // const result = await studentModel.find({ age: 25 });
    console.log(result);
    // console.log(result[0].name, result[0].age, result[0].fees.toString());
}

// Retrieve Document by Field with Specific Field
const getDocByFieldSpecificFiled = async () => {
    const result = await studentModel.find({ name: 'Sonam' }).select('name age');
    console.log(result);
}

// Retrieve Limited Document
const getLimitedDoc = async () => {
    const result = await studentModel.find().limit(4);
    // const result = await studentModel.find({}, null, { limit: 4 });
    console.log(result);
}

// Retrieve Skip Document
const getSkipDoc = async () => {
    const result = await studentModel.find().skip(1);
    // const result = await studentModel.find({}, null, { skip: 1 });
    console.log(result);
}

// Count Document
const getDocCount = async () => {
    // const result = await studentModel.countDocuments();
    const result = await studentModel.find().countDocuments();
    console.log(result);
}

// Sort Document
const getSortedDoc = async () => {
    // const result = await studentModel.find().sort({ age: 1 }); // Ascending
    const result = await studentModel.find().sort({ age: -1 }); // Descending
    console.log(result);
}

// Mix 
const mixDoc = async () => {
    const result = await studentModel.find({}, { name: 1, age: 1 }, { limit: 5, skip: 1 });
    console.log(result);
}

// Comparison Query Operator
const comDoc = async () => {
    const result = await studentModel.find({ age: { $gt: 25 } }); // Greater Than
    // const result = await studentModel.find({ age: { $gte: 25 } }); // Greater Than or Equal To
    // const result = await studentModel.find({ age: { $lt: 25 } }); // Less Than
    // const result = await studentModel.find({ age: { $lte: 25 } }); // Less Than or Equal To
    // const result = await studentModel.find({ age: { $eq: 25 } }); // Equal To
    // const result = await studentModel.find({ age: { $nte: 25 } }); // Not Equal To
    // const result = await studentModel.find({ age: { $in: [21, 25] } }); // In Array (Array of Values)
    // const result = await studentModel.find({ age: { $nin: [21, 25] } }); // Not In Array (Array of Values)
    console.log(result);
}

// Logical Query Operator
const logDoc = async () => {
    const result = await studentModel.find({ $and: [{ age: 27 }, { fees: 6500.4 }] }); // And
    // const result = await studentModel.find({ $and: [{ age: { $gt: 25 } }, { fees: 6500.4 }] }); // And
    // const result = await studentModel.find({ $or: [{ age: 27 }, { fees: 16500.4 }] }); // Or
    // const result = await studentModel.find({ $or: [{ age: { $gt: 25 } }, { fees: 8400.4 }] }); // Or
    // const result = await studentModel.find({ $or: [{ age: { $not: { $gt: 25 } } }] }); // Not
    // const result = await studentModel.find({ $nor: [{ age: 25 }, { fees: 6500.4 }] }); // Nor
    console.log(result);
}

export {
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
};