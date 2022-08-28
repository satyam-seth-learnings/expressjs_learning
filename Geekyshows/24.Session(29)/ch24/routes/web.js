import express from "express";
import StudentController from "../controllers/studentController.js";

const router = express.Router();

router.get('/getsessioninfo', StudentController.get_session_info);
router.get('/deletesession', StudentController.delete_session);
router.get('/regensession', StudentController.regen_session);
router.get('/examplesession', StudentController.session_example);
router.get('/getdata', StudentController.get_session_data);

export default router;