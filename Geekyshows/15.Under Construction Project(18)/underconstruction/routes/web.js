import express from "express";
import { aboutController } from "../controllers/aboutController.js";
import { homeController } from '../controllers/homeController.js'

const router = express.Router();

router.get('/', homeController);
router.get('/about', aboutController);

export default router;