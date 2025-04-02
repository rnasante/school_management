export async function getTotalStudents(): Promise<number> {
    const response = await fetch("http://localhost:5000/api/students/total");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.count; // Ensure API returns `{ count: number }`
  }
  