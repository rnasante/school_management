import { useState, useEffect } from "react";
import {Student} from "@/lib/types"
import { getTotalStudents, getAllStudents } from "@/services/student-service";

export function useTotalStudents() {
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

export function useAllStudents() {
  const [students, setStudents] = useState<Student[]>([])
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      async function fetchData() {
        try {
          const data = await getAllStudents()
          setStudents(data)
        } catch (error) {
          console.error("Failed to fetch students:", error)
        } 
        // finally {
        //   setLoading(false)
        // }
      }

      fetchData()
    }
  }, [])

  return { students }
}


