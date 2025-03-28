import { DashboardLayout } from "@/src/components/dashboard-layout";

export default function AttendancePage() {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
        <div className="rounded-lg border bg-card p-8 text-center">
          <h2 className="text-lg font-medium">Attendance Records</h2>
          <p className="mt-2 text-muted-foreground">
            This page will display attendance records and allow marking attendance.
          </p>
        </div>
      </div>
    </DashboardLayout>
  )
}

