// Template Engine
// const express = require('express');
import express from "express";
import web from './routes/web.js';
import { join } from 'path';

const app = express();
const port = process.env.PORT || '3000';

// Setup the Directory where the template files are located
// app.set('views', './views'); // default
// app.set('views', './myviews');

// Setup the Template Engine to use
app.set('view engine', 'ejs');

// Load Static
app.use(express.static(join(process.cwd(), 'public')));

// Load Routes
app.use('/', web);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})