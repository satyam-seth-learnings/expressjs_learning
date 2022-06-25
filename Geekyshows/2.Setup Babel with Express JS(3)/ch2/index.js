// Setup Babel With Express JS
// const express = require('express')
import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // res.send('Hello World!')
    // res.send('Hello Geekyshows')
    // res.send('Hello Sonam')
    res.send('Hello Rahul')
})

app.listen(port, () => {
    console.log(`Example app listening on at http://localhost:${port}`)
})