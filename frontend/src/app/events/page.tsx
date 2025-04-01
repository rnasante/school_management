// import { DashboardLayout } from "@/components/dashboard-layout"
// import { EventsCalendar } from "@/components/events-calendar"

import { DashboardLayout } from "@/src/components/dashboard-layout";
import { EventsCalendar } from "@/src/components/events-calendar";

export default function EventsPage() {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold tracking-tight">School Events</h1>
        <EventsCalendar />
      </div>
    </DashboardLayout>
  )
}

