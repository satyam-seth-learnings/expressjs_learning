// const express = require('express');
import express from "express";
import { homeContoller } from "../controllers/homeController.js";

const router = express.Router();
router.get("/", homeContoller);

export default router;