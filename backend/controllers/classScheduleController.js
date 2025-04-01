import { error } from 'console';
import { createClassSchedule, getClassScheduleById, getClassSchedules, 
    updateClassSchedule, deleteClassSchedule, getGroupedClassSchedules } from '../services/classScheduleService.js';

export const createSchedule = async (req, res) => {
  try {
    const schedule = await createClassSchedule(req.body);

    res.status(201).json({
      success: true,
      message: 'Class schedule created successfully',
      data: schedule
    });
  } catch (error) {
    console.error('Error creating schedule:', error);

    res.status(500).json({
      success: false,
      message: 'Error creating class schedule',
      error: error.message
    });
  }
};

export const classScheduleDetails = async (req, res) => {
    try {
        const classScheduleInfo = await getClassScheduleById(req.params.schedule_id);

        console.log(classScheduleInfo);

        res.status(200).json({
            success: true,
            message: 'Class schedule retrieved successfully',
            classScheduleInfo
        });
    } catch(error) {
        console.log('Error in classScheduleDetails controller');

        res.status(500).json({
            success: false,
            message: 'Error fetching class schedule details',
            error: error.message
        });
    }
}

export const getAllSchedules = async (req, res) => {
    try {
        const allSchedules = await getClassSchedules();

        res.status(200).json({
            success: true,
            message: 'All class schedules fetched successfully!',
            allSchedules
        });
    } catch(error) {
        console.log('Error in getAllSchedules controller: ', error);

        res.status(500).json({
            success: false,
            message: 'Failed to fetch  all class schedules',
            error: error.message
        });
    }
}

export const updateScheduleDetails = async (req, res) => {
    try{
        const updateData = await updateClassSchedule(req.params.schedule_id, req.body);

        res.status(200).json({
            success: true,
            message: 'Class schedule updated successfully!',
            updateData
        });
    } catch(error) {
        console.log('Error in updateScheduleDetails controller: ', error);

        res.status(500).json({
            success: false, 
            message: 'Error updating class schedule',
            error: error.message
        });
    }   
}

export const removeClassSchedule = async (req, res) => {
    try {
        const scheduleDetails = await deleteClassSchedule(req.params.schedule_id);

        res.status(200).json({
            success: true,
            message: 'Class schedule deleted successfully',
            scheduleDetails
        });
    } catch(error) {
        console.log('Error deleting class schedule');

        res.status(500).json({
            success: false,
            message: 'Error deleting class schedule',
            error: error.message
        });
    }
}


export const getGroupedSchedules = async (req, res) => {
  try {
    // Use query parameter ?groupBy=class or ?groupBy=teacher; default is 'class'
    const groupBy = req.query.groupBy || 'class';

    const groupedSchedules = await getGroupedClassSchedules(groupBy);

    res.status(200).json({
      success: true,
      message: 'Grouped schedules fetched successfully',
      data: groupedSchedules
    });
    
  } catch (error) {
    console.error('Error fetching grouped schedules:', error);

    res.status(500).json({
      success: false,
      message: 'Error fetching grouped schedules',
      error: error.message
    });
  }
};
