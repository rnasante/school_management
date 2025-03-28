// import { DashboardLayout } from "@/components/dashboard-layout"
// import { Button } from "@/components/ui/button"
import { DashboardLayout } from "@/src/components/dashboard-layout"
import { Button } from "@/src/components/ui/button"
import { UsersTable } from "@/src/components/users-table"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
// import { UsersTable } from "@/components/users-table"

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <Button asChild>
            <Link href="/users/add">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New User
            </Link>
          </Button>
        </div>

        <UsersTable />
      </div>
    </DashboardLayout>
  )
}

