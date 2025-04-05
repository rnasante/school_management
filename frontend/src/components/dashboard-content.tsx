"use client";

import type React from "react"
import { Users, UserCheck, BookOpen, Calendar, Award, ClipboardList } from "lucide-react"
import { StatCard } from "./ui/stat-card"
import { AttendanceChart } from "./attendance-chart"
import { useTotalStudents } from "../../hooks/use-student"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"


export function DashboardContent() {

  const { totalStudents, loading } = useTotalStudents();

  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold tracking-tight">School Dashboard</h1>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Students" 
          value={loading ? "Loading..." : totalStudents?.toString() || "0"} 
          description="Enrolled students" 
          trend={5.2} 
          icon={Users} 
        />
        <StatCard title="Attendance Rate" value="94.5%" description="This week" trend={2.1} icon={UserCheck} />
        <StatCard title="Classes" value="48" description="Active classes" trend={0} icon={BookOpen} />
        <StatCard title="Upcoming Events" value="12" description="Next 30 days" trend={8.4} icon={Calendar} />
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
            <CardDescription>Weekly attendance rates by grade</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <AttendanceChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest school activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ActivityItem
                icon={Award}
                title="Grade Reports"
                description="Term 1 grades published"
                time="2 hours ago"
              />
              <ActivityItem
                icon={ClipboardList}
                title="Attendance"
                description="Class 10B marked present"
                time="3 hours ago"
              />
              <ActivityItem icon={Users} title="New Student" description="Emma Johnson enrolled" time="Yesterday" />
              <ActivityItem
                icon={Calendar}
                title="Event Scheduled"
                description="Science Fair on June 15"
                time="2 days ago"
              />
              <ActivityItem
                icon={BookOpen}
                title="Curriculum Update"
                description="Math syllabus updated"
                time="3 days ago"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

// interface StatCardProps {
//   title: string
//   value: string
//   description: string
//   trend: number
//   icon: React.ElementType
// }

// function StatCard({ title, value, description, trend, icon: Icon }: StatCardProps) {
//   const isPositive = trend > 0
//   const isNeutral = trend === 0

//   return (
//     <Card>
//       <CardHeader className="flex flex-row items-center justify-between pb-2">
//         <CardTitle className="text-sm font-medium">{title}</CardTitle>
//         <Icon className="h-4 w-4 text-muted-foreground" />
//       </CardHeader>
//       <CardContent>
//         <div className="text-2xl font-bold">{value}</div>
//         <p className="text-xs text-muted-foreground">{description}</p>
//         {!isNeutral && (
//           <div className={`mt-1 flex items-center text-xs ${isPositive ? "text-green-500" : "text-red-500"}`}>
//             {isPositive ? <ArrowUp className="mr-1 h-3 w-3" /> : <ArrowDown className="mr-1 h-3 w-3" />}
//             <span>{Math.abs(trend)}%</span>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   )
// }

interface ActivityItemProps {
  icon: React.ElementType
  title: string
  description: string
  time: string
}

function ActivityItem({ icon: Icon, title, description, time }: ActivityItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="flex-1">
        <div className="font-medium">{title}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
      <div className="text-xs text-muted-foreground">{time}</div>
    </div>
  )
}

