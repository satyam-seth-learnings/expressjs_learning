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

// Insert One 
// const createDoc = async () => {
//     try {
//         // Creating New Document
//         const studentDoc = new studentModel(
//             // {
//             //     // _id: 1234,
//             //     name: 'Sonam',
//             //     age: 27,
//             //     fees: 6500.40,
//             //     hobbies: ['dancing', 'reading'],
//             //     isactive: true,
//             //     comments: [{ value: 'This is good mongoose' }]
//             // }
//             {
//                 name: 'Rahul',
//                 age: 25,
//                 fees: 8500.40,
//                 hobbies: ['dancing', 'reading'],
//                 isactive: true,
//                 comments: [{ value: 'This is good' }]
//             }
//         );

//         // Saving Document
//         const result = await studentDoc.save();
//         console.log(result);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

const createDoc = async (nm, ag, fe, hob, isact, comt) => {
    try {
        // Creating New Document
        const studentDoc = new studentModel({
            name: nm,
            age: ag,
            fees: fe,
            hobbies: hob,
            isactive: isact,
            comments: comt
        });

        // Saving Document
        const result = await studentDoc.save();
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}

// Insert Many
const createMultiDoc = async () => {
    try {
        // Creating New Document
        const rohanDoc = new studentModel(
            {
                name: 'Rohan',
                age: 25,
                fees: 8500.40,
                hobbies: ['dancing', 'reading'],
                isactive: true,
                comments: [{ value: 'This is good' }]
            }
        );

        const sumanDoc = new studentModel(
            {
                name: 'Suman',
                age: 21,
                fees: 8700.40,
                hobbies: ['dancing', 'reading'],
                isactive: true,
                comments: [{ value: 'This is good' }]
            }
        );

        const kunalDoc = new studentModel(
            {
                name: 'Kunal',
                age: 27,
                fees: 8400.40,
                hobbies: ['dancing', 'reading'],
                isactive: true,
                comments: [{ value: 'This is good' }]
            }
        );

        // Saving Document
        const result = await studentModel.insertMany([rohanDoc, sumanDoc, kunalDoc]);
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}


export { createDoc, createMultiDoc };