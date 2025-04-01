import express from 'express';
import { addProgram, addSection, addYear, addClass } from "../controllers/addClassController.js";

const router = express.Router();

router.post ('/program/add', addProgram);

router.post('/section/add', addSection);

router.post('/year/add', addYear);

router.post('/class/add', addClass);

export default router;
