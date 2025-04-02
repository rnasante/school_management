import dotenv from 'dotenv';

dotenv.config();

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// console.log("API_BASE_URL:", API_BASE_URL);

export async function getTotalStudents(): Promise<number> {
    const response = await fetch(`${API_BASE_URL}/api/students/total`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.count; // Ensure API returns `{ count: number }`
  }
  