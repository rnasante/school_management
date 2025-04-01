import express from 'express';
import { createSchedule, classScheduleDetails, getAllSchedules,
    updateScheduleDetails, removeClassSchedule, getGroupedSchedules } from '../controllers/classScheduleController.js';

const router = express.Router();

// add a class schedule
router.post('/class-schedule/add-schedule', createSchedule);

// get grouped class schedules(by class or teacher)
router.get('/class-schedule/grouped', getGroupedSchedules);

// get a class schedule by id
router.get('/class-schedule/:schedule_id', classScheduleDetails);

// GET endpoint to retrieve all class schedules
router.get('/class-schedules', getAllSchedules);

// update a class schedule detail by id
router.put('/class-schedule/:schedule_id', updateScheduleDetails);

// delete a class schedule by id
router.delete('/class-schedule/:schedule_id', removeClassSchedule);



export default router;
