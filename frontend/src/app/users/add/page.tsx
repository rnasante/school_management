// import { DashboardLayout } from "@/components/dashboard-layout"
// import { UserForm } from "@/components/user-form"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/src/components/dashboard-layout"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { UserForm } from "@/src/components/user-form"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function AddUserPage() {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Add New User</h1>
          <Button variant="outline" asChild>
            <Link href="/users">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Users
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>User Information</CardTitle>
            <CardDescription>Add a new user to the system. Fill in all required fields.</CardDescription>
          </CardHeader>

          <CardContent>
            <UserForm />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

