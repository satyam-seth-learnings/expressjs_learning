// const express = require('express');
import express from "express";

const router = express.Router();

// All Student Routes
// router.get('/all', (req, res) => {
//     res.send('All Student');
// })
// router.post('/student/create', (req, res) => {
//     res.send('New Student Created');
// })
// router.put('/student/update', (req, res) => {
//     res.send('Student Updated');
// })
// router.delete('/student/delete', (req, res) => {
//     res.send('Student Deleted');
// })

router.get('/all', (req, res) => {
    res.send('All Student');
})
router.post('/create', (req, res) => {
    res.send('New Student Created');
})
router.put('/update', (req, res) => {
    res.send('Student Updated');
})
router.delete('/delete', (req, res) => {
    res.send('Student Deleted');
})

// module.exports = router;
export default router;