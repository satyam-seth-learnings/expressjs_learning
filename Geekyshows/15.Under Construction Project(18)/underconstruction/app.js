// Under Construction Project
import express from "express";
import web from './routes/web.js';
import underConstruction from "./middlewares/uc-middleware.js";

const app = express();
const port = process.env.PORT || '3000';

// Application Level Middleware
app.use(underConstruction);
app.use('/about', underConstruction);

// Set Template Engine
app.set('view engine', 'ejs');

// Load Routes
app.use('/', web);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})