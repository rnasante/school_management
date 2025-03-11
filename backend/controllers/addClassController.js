import { error } from 'console';
import { createProgram, createSection, createYear, createClass } from '../services/addClassService.js';

export const addProgram = async (req, res)  => {
    try {
        const program = req.body;
        const newProgram = await createProgram(program);
        res.status(201).json({message: 'Program added successfully', newProgram});

    } catch {
        res.status(401).json({error: error.message});
    }
}

export const addSection = async (req, res) => {
    try {
        const section = req.body;
        const newSection = await createSection(section);
        res.status(201).json({message: 'Section added successfully', newSection});

    }
    catch {
        res.status(401).json({error: error.message});
    }
}

export const addYear = async (req, res) => {
    try {
        const year = req.body;
        const newYear = await createYear(year);
        res.status(201).json({message: 'Year added successfully', newYear});

    } catch {
        res.status(401).json({error: error.message});
    }
}

export const addClass = async (req, res) => {
    // try {
    //     const className = req.body;
    //     const newClass = await createClass(className);
    //     res.status(201).json({message: 'Class added successfully', newClass});

    // } catch {
    //     res.status(401).json({error: error.message});
    // }

    let className = req.body;
    
    try {
        if (className) {
            const newClass = await createClass(className);
            res.status(201).json({message: 'Class added successfully', newClass});
        }

    } catch (error) {
        res.status(401).json({error: error.message});
    }
}
