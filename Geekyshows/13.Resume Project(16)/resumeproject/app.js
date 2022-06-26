// Embedded JavaScript (EJS) Template Engine
// const express = require('express');
import express from "express";
import web from "./routes/web.js";

const app = express();
const port = process.env.PORT || '3000';

// Set Template Engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('public'));

// Load Routes
app.use('/', web);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})