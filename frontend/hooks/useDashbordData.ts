import { useState, useEffect } from "react";
import { getTotalStudents } from "../services/getTotalStudentCountApi";

export function useDashboardData() {
  const [totalStudents, setTotalStudents] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      async function fetchData() {
        try {
          const count = await getTotalStudents();
          setTotalStudents(count);
        } catch (error) {
          console.error("Failed to fetch total students:", error);
        } finally {
          setLoading(false);
        }
      }
  
      fetchData();
    }
  }, []);

  return { totalStudents, loading };
}
