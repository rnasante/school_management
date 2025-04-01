"use client"

import { useTheme } from "next-themes"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { grade: "Grade 1", attendance: 96, absences: 4 },
  { grade: "Grade 2", attendance: 94, absences: 6 },
  { grade: "Grade 3", attendance: 98, absences: 2 },
  { grade: "Grade 4", attendance: 93, absences: 7 },
  { grade: "Grade 5", attendance: 95, absences: 5 },
  { grade: "Grade 6", attendance: 91, absences: 9 },
  { grade: "Grade 7", attendance: 97, absences: 3 },
  { grade: "Grade 8", attendance: 92, absences: 8 },
]

export function AttendanceChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Colors that work in both light and dark mode
  const colors = {
    attendance: "#3b82f6", // blue-500
    absences: "#ef4444", // red-500
    text: isDark ? "#f1f5f9" : "#334155", // slate-100 : slate-700
    grid: isDark ? "#475569" : "#e2e8f0", // slate-600 : slate-200
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
        <XAxis
          dataKey="grade"
          tick={{ fill: colors.text }}
          tickLine={{ stroke: colors.grid }}
          axisLine={{ stroke: colors.grid }}
        />
        <YAxis
          tick={{ fill: colors.text }}
          tickLine={{ stroke: colors.grid }}
          axisLine={{ stroke: colors.grid }}
          domain={[0, 100]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: isDark ? "#1e293b" : "#ffffff",
            color: colors.text,
            border: `1px solid ${colors.grid}`,
          }}
          labelStyle={{ color: colors.text }}
        />
        <Legend wrapperStyle={{ color: colors.text }} />
        <Bar dataKey="attendance" fill={colors.attendance} name="Attendance %" />
        <Bar dataKey="absences" fill={colors.absences} name="Absence %" />
      </BarChart>
    </ResponsiveContainer>
  )
}

