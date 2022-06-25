// Controller
// const express = require('express');
import express from "express";
import student from './routes/student.js'

const app = express();
const port = process.env.PORT || '3000';

// Why we need Router and Controller
// app.get('/student/all', (req, res) => {
//     res.send('All Student');
// })

// app.get('/student/delete/:id([0-9]{2})', (req, res) => {
//     console.log(req.params);
//     const { id } = req.params;
//     console.log(id);
//     if (id == 10) {
//         res.send("Ye Sonam ki ID hai 10 so ye Delete nhi hoga");
//     }
//     else {
//         res.send(`Student Delete ${id}`);
//     }
// })

// Using Contoller and Router
app.use('/student', student);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})