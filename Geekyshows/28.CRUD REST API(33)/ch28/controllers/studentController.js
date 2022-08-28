import StudentModel from "../models/Student.js";

class StudentController {
    static createDoc = async (req, res) => {
        // res.send("Data Created");
        try {
            // const doc = new StudentModel(req.body);
            const { name, age, fees } = req.body;
            const doc = new StudentModel({
                name: name,
                age: age,
                fees: fees,
            })
            const result = await doc.save();
            // res.send(result);
            res.status(201).send(result);
        } catch (error) {
            res.send(error);
        }
    }

    static getAllDoc = async (req, res) => {
        // res.send("All Doc");
        try {
            const result = await StudentModel.find();
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    };

    static getSingleDocById = async (req, res) => {
        // res.send("Get Single Doc By Id");
        try {
            const result = await StudentModel.findById(req.params.id);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    };

    static updateDocById = async (req, res) => {
        // res.send("Update Doc By Id");
        try {
            console.log(req.body);
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body);
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    };

    static deleteDocById = async (req, res) => {
        // res.send("Delete Doc By Id");
        const result = await StudentModel.findByIdAndDelete(req.params.id);
        res.status(204).send(result);
    };
}

export default StudentController;