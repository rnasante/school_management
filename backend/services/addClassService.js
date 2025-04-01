import Program from "../models/programModel.js";
import Section from "../models/classSectionModel.js";
import Year from "../models/classYearModel.js";
import Class from "../models/classModel.js"
import { generateModelID5 } from "../utilities/idGenerator.js";
import { error } from "console";

export const createProgram = async (programData) => {
    const{program_name} = programData;

    const existingProgram = await Program.findOne({where: {program_name}})
    if(existingProgram) 
        {
            throw new Error('Program already exists');
        }

    const newProgram = await Program.create({
        program_id: generateModelID5('PRG'),
        program_name
    })

    return newProgram;
}

export const createSection = async (sectionData) => {
    const {section_name} = sectionData;

    const existingSection = await Section.findOne({where: {section_name}})
    if(existingSection) {
        throw new Error ('Section already exists');
    }

    const newSection = await Section.create({
        section_id: generateModelID5('SEC'),
        section_name
    })

    return newSection;
}

export const createYear = async (yearData) => {
    const{year_name} = yearData;

    const existingYear = await Year.findOne({where: {year_name}});
    if(existingYear){
        throw new Error('Year already exists');
    }

    const newYear = await Year.create({
        year_id: generateModelID5('YR'),
        year_name
    })

    return newYear;
}

export const createClass = async (classData) => {
    const {program_name, section_name, year_name} = classData;

    if (!year_name) {
        throw new Error('Pick a year before adding class!');
     }

    let actualClass;

    if (program_name && !section_name) {
        actualClass = `${program_name} ${year_name}`;
     } else if (!program_name && section_name) {
        actualClass = `${year_name} ${section_name}`;
     }  
    else {
        actualClass = `${year_name} ${program_name} ${section_name}`;
     }

    const existingClass = await Class.findOne({where: {class_name: actualClass}});
    if (existingClass) {
        throw new Error('Class already exists');
    }
    const newClass = await Class.create({
        class_id: generateModelID5('CLS'),
        class_name: actualClass
    })

    console.log(newClass);

    return newClass;

}


