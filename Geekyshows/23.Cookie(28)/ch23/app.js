import express from 'express';
import web from './routes/web.js';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || '3000';

// Application Level Middleware
app.use(cookieParser());

// Load Routes
app.use('/', web);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})