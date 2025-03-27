import sequelize from '../config/database.js';
import { Op, QueryTypes } from 'sequelize';
import Class from '../models/classModel.js';
import ClassSchedule from '../models/classScheduleModel.js';
import Subject from '../models/subjectModel.js';
import Teacher from '../models/teacherModel.js';
import { padTime } from '../utilities/padTimeString.js';
import { generateModelID5 } from '../utilities/idGenerator.js';

export const createClassSchedule = async (scheduleData) => {
    const { class_id, subject_id, teacher_id, day, start_time, end_time } = scheduleData;

    // Ensure times are in "HH:mm" format.
    const paddedStart = padTime(start_time);
    const paddedEnd = padTime(end_time);

    // Define break periods (using 24-hour format strings)
    const breaks = [
        { start: new Date('1970-01-01T09:00:00'), end: new Date('1970-01-01T10:00:00') },
        { start: new Date('1970-01-01T13:00:00'), end: new Date('1970-01-01T14:00:00') }
    ];

     // Assume start_time and end_time are "09:00" and "09:30"
    const scheduleStart = new Date(`1970-01-01T${paddedStart}:00`);
    const scheduleEnd = new Date(`1970-01-01T${paddedEnd}:00`);

    // Check if the new schedule overlaps with any break period.
    const isWithinBreak = breaks.some(b => {
        // Overlap condition: new schedule's start_time is before break end AND new schedule's end_time is after break start.
        return scheduleStart < b.end && scheduleEnd > b.start;
    });
    
    if (isWithinBreak) {
        throw new Error('Schedule conflicts with a designated break period (9-10 AM or 1-2 PM).');
    }

    // Prepare time strings in a format matching the DB (e.g., "HH:mm:ss").
    const start_time_db = `${paddedStart}:00`;
    const end_time_db = `${paddedEnd}:00`;

    // Check for overlapping schedules for the same teacher or class on the same day.
    const overlappingSchedule = await ClassSchedule.findOne({
        where: {
        day,
        [Op.or]: [
            { teacher_id },
            { class_id }
        ],
        [Op.and]: [
            { start_time: { [Op.lt]: end_time_db } },
            { end_time: { [Op.gt]: start_time_db } }
        ]
        }
    });

    if (overlappingSchedule) {
        throw new Error('Schedule conflict detected! Either the class or the teacher is already assigned at this time.');
    }

  // Create the schedule if all validations pass.
    const schedule = await ClassSchedule.create({
        schedule_id: generateModelID5('C-SCH'),
        class_id,
        subject_id,
        teacher_id,
        day,
        start_time: start_time_db,
        end_time: end_time_db
    });

    return schedule;
};

// Retrieve a schedule entry by its unique schedule ID.
export const getClassScheduleById = async (schedule_id) => {
    const schedule = await ClassSchedule.findByPk(schedule_id);

    if (!schedule) throw new Error('Class schedule not found');

    return schedule;
  };
  
// Retrieve all schedules, possibly with filters (e.g., by day, by class).
export const getClassSchedules = async () => {
    const schedules = await ClassSchedule.findAll();

    return schedules;
};


// Update an existing schedule entry while revalidating for conflicts.
export const updateClassSchedule = async (schedule_id, updateData) => {
    const schedule = await ClassSchedule.findByPk(schedule_id);
    if (!schedule) throw new Error('Class schedule not found');

    const {start_time, end_time, day} = updateData;

    // Use the existing teacher_id and class_id from the schedule if not provided in updateData.
    const teacher_id = updateData.teacher_id || schedule.teacher_id;
    const class_id = updateData.class_id || schedule.class_id;

    // You might re-run overlap and break period checks here before updating.
    // Ensure times are in "HH:mm" format.
    const paddedStart = padTime(start_time);
    const paddedEnd = padTime(end_time);


    // Define break periods (using 24-hour format strings)
    const breaks = [
        { start: new Date('1970-01-01T09:00:00'), end: new Date('1970-01-01T10:00:00') },
        { start: new Date('1970-01-01T13:00:00'), end: new Date('1970-01-01T14:00:00') }
    ];

    // Assume start_time and end_time are "09:00" and "09:30"
    const scheduleStart = new Date(`1970-01-01T${paddedStart}:00`);
    const scheduleEnd = new Date(`1970-01-01T${paddedEnd}:00`);

    // Check if the new schedule overlaps with any break period.
    const isWithinBreak = breaks.some(b => {
        // Overlap condition: new schedule's start_time is before break end AND new schedule's end_time is after break start.
        return scheduleStart < b.end && scheduleEnd > b.start;
    });

    if (isWithinBreak) {
        throw new Error('Schedule conflicts with a designated break period (9-10 AM or 1-2 PM).');
    }

    // Prepare time strings in a format matching the DB (e.g., "HH:mm:ss").
    const start_time_db = `${paddedStart}:00`;
    const end_time_db = `${paddedEnd}:00`;

    // Check for overlapping schedules for the same teacher or class on the same day.
    const overlappingSchedule = await ClassSchedule.findOne({
        where: {
        day,
        [Op.or]: [
            { teacher_id },
            { class_id }
        ],
        [Op.and]: [
            { start_time: { [Op.lt]: end_time_db } },
            { end_time: { [Op.gt]: start_time_db } }
        ]
        }
    });

    if (overlappingSchedule) {
        throw new Error('Schedule conflict detected! Either the class or the teacher is already assigned at this time.');
    }

    await schedule.update(updateData);
    return schedule;
};
  
// Delete a schedule entry if no longer needed.
export const deleteClassSchedule = async (schedule_id) => {
    const schedule = await ClassSchedule.findByPk(schedule_id); 

    if (!schedule) throw new Error('Class schedule not found');

    await schedule.destroy();

    return { message: 'Class schedule deleted successfully' };
};


// get class schedule goruped by class or teacher
export const getGroupedClassSchedules = async (groupBy = 'class') => {
    // Fetch all schedules with the related data
    // const schedules = await ClassSchedule.findAll();

    // Example raw query joining ClassSchedule and Teacher tables.
    const classGrpQuery = `
    SELECT cs.*, c.class_name
    FROM ClassSchedules cs
    LEFT JOIN Classes c ON c.class_id = cs.class_id
    `;
    const classSchedule = await sequelize.query(classGrpQuery, { type: QueryTypes.SELECT });

    const teacherGrpQuery = `
    SELECT cs.*, t.first_name, t.last_name
    FROM ClassSchedules cs
    LEFT JOIN Teachers t ON cs.teacher_id = t.teacher_id
    `;
    const teacherSchedule = await sequelize.query(teacherGrpQuery, { type: QueryTypes.SELECT });


  
    let grouped;
  
    if (groupBy === 'class') {
      // Group schedules by class name
      grouped = classSchedule.reduce((acc, schedule) => {
        const key = schedule.class_name ? schedule.class_name : 'Unknown';
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(schedule);
        return acc;
      }, {});
    } else if (groupBy === 'teacher') {
      // Group schedules by teacher full name
      grouped = teacherSchedule.reduce((acc, schedule) => {
        const teacherName = schedule.first_name && schedule.last_name
          ? `${schedule.first_name} ${schedule.last_name}`
          : 'Unknown';
        if (!acc[teacherName]) {
          acc[teacherName] = [];
        }
        acc[teacherName].push(schedule);
        return acc;
      }, {});
    } else {
      throw new Error("Invalid groupBy parameter. Use 'class' or 'teacher'.");
    }
  
    return grouped;
};