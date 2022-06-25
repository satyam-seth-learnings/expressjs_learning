// Router
// const express = require('express');
// const stu = require('./routes/student.js');
// const teacher = require('./routes/teacher');

import express from "express";
import stu from './routes/student.js';
import teacher from './routes/teacher.js';

const app = express();
const port = process.env.PORT || '3000';

// Load Router Modules
app.use('/vidyarthi', stu);
app.use('/teacher', teacher);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})