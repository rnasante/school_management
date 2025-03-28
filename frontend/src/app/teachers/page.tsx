// import { DashboardLayout } from "@/components/dashboard-layout"

import { DashboardLayout } from "@/src/components/dashboard-layout";

export default function TeachersPage() {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Teachers</h1>
        <div className="rounded-lg border bg-card p-8 text-center">
          <h2 className="text-lg font-medium">Teachers Directory</h2>
          <p className="mt-2 text-muted-foreground">
            This page will display the list of teachers and their information.
          </p>
        </div>
      </div>
    </DashboardLayout>
  )
}

