// import { DashboardLayout } from "@/components/dashboard-layout"
// import { StudentForm } from "@/components/student-form"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/src/components/dashboard-layout"
import { StudentForm } from "@/src/components/student-form"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function AddStudentPage() {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Add New Student</h1>
          <Button variant="outline" asChild>
            <Link href="/students">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Students
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Student Information</CardTitle>
            <CardDescription>Enter the details of the new student to add them to the system.</CardDescription>
          </CardHeader>

          <CardContent>
            <StudentForm />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

