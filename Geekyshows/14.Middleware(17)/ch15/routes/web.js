import express from 'express';
import { aboutController } from '../controllers/aboutController.js';
import { homeController } from '../controllers/homeController.js';

const router = express.Router();

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/about/12', (req, res) => {
    res.send('/about/12');
});
router.get('/student/43', (req, res) => {
    res.send('/Student/43');
});

export default router;