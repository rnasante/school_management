"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Calendar } from "./ui/calendar"
import { Badge } from "./ui/badge"
// import { Calendar } from "@/components/ui/calendar"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"

// Sample events data
const events = [
  { id: 1, title: "Science Fair", date: new Date(2025, 2, 15), type: "academic" },
  { id: 2, title: "Parent-Teacher Meeting", date: new Date(2025, 2, 18), type: "meeting" },
  { id: 3, title: "Basketball Tournament", date: new Date(2025, 2, 22), type: "sports" },
  { id: 4, title: "Art Exhibition", date: new Date(2025, 2, 25), type: "cultural" },
  { id: 5, title: "Math Olympiad", date: new Date(2025, 2, 28), type: "academic" },
  { id: 6, title: "Annual Day", date: new Date(2025, 3, 5), type: "cultural" },
  { id: 7, title: "Board Exams Begin", date: new Date(2025, 3, 10), type: "academic" },
  { id: 8, title: "Staff Meeting", date: new Date(2025, 3, 12), type: "meeting" },
]

export function EventsCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Get events for the selected date
  const selectedDateEvents = events.filter((event) => date && event.date.toDateString() === date.toDateString())

  // Function to get badge color based on event type
  const getEventBadgeColor = (type: string) => {
    switch (type) {
      case "academic":
        return "bg-blue-500 hover:bg-blue-600"
      case "meeting":
        return "bg-amber-500 hover:bg-amber-600"
      case "sports":
        return "bg-green-500 hover:bg-green-600"
      case "cultural":
        return "bg-purple-500 hover:bg-purple-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  // Function to determine if a date has events
  const hasEvent = (date: Date) => {
    return events.some((event) => event.date.toDateString() === date.toDateString())
  }

  // Create a custom modifier for dates with events
  const eventDates = events.map((event) => new Date(event.date))

  return (
    <div className="grid gap-6 md:grid-cols-[1fr_300px]">
      <Card>
        <CardHeader>
          <CardTitle>School Calendar</CardTitle>
          <CardDescription>View and manage upcoming school events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-3 border rounded-md">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              modifiers={{
                event: eventDates,
              }}
              modifiersStyles={{
                event: {
                  fontWeight: "bold",
                  textDecoration: "underline",
                  textDecorationColor: "var(--primary)",
                  textDecorationThickness: "2px",
                },
              }}
              className="mx-auto"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            {date
              ? date.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Select a date"}
          </CardTitle>
          <CardDescription>
            {selectedDateEvents.length ? `${selectedDateEvents.length} events scheduled` : "No events scheduled"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {selectedDateEvents.length > 0 ? (
            <div className="space-y-4">
              {selectedDateEvents.map((event) => (
                <div key={event.id} className="flex flex-col space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{event.title}</span>
                    <Badge className={getEventBadgeColor(event.type)}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {event.date.toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-[140px] items-center justify-center text-muted-foreground">
              {date ? "No events for this date" : "Select a date to view events"}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

