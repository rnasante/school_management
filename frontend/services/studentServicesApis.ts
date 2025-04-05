import dotenv from 'dotenv';
import { Student } from '@/lib/types';


dotenv.config();

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

//get total number of students
export async function getTotalStudents(): Promise<number> {
    const response = await fetch(`${API_BASE_URL}/api/students/total`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.count; // Ensure API returns `{ count: number }`
  }
  
  //get all students
  export async function getAllStudents(): Promise<Student[]> {
    const response = await fetch (`${API_BASE_URL}/api/students`);
    if(!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  }