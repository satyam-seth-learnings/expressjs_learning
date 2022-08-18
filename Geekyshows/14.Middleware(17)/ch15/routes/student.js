import express from 'express';
import { studentController } from '../controllers/studentController.js';
import myLogger from '../middlewares/logger-middleware.js';

const router = express.Router();

// Router Level Middleware
// router.use(, myLogger);
router.use('/student', myLogger);

router.get('/student', studentController);
router.get('/event', (req, res) => {
    res.send('Eevents');
});
router.get('/student/23', (req, res) => {
    res.send('/Student/23');
});

export default router;