import { useState, useEffect } from "react";
import { getTotalStudents } from "../services/api";

export function useDashboardData() {
  const [totalStudents, setTotalStudents] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  return { totalStudents, loading };
}
