import express from 'express';
import { allStudent, deleteStudent } from '../controllers/studentController.js';

const router = express.Router();

// Without using Controller
// router.get('/all', (req, res) => {
//     res.send('All Student');
// })

// router.get('/delete/:id([0-9]{2})', (req, res) => {
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

// Using Controller
router.get('/all', allStudent)

router.get('/delete/:id([0-9]{2})', deleteStudent)

export default router;