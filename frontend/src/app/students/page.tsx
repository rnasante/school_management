// import { DashboardLayout } from "@/components/dashboard-layout"
// import { StudentsTable } from "@/components/students-table"

import { DashboardLayout } from "@/src/components/dashboard-layout";
import { StudentsTable } from "@/src/components/students-table";

export default function StudentsPage() {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Students</h1>
        <StudentsTable />
      </div>
    </DashboardLayout>
  )
}

