"use client"

import { useState } from "react"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react"
import { Input } from "./ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Badge } from "./ui/badge"
import { DropdownMenu, DropdownMenuSubTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "./ui/button"
import { DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"

// Sample user data
const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1 (555) 123-4567",
    role: "admin",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+1 (555) 987-6543",
    role: "teacher",
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.j@example.com",
    phoneNumber: "+1 (555) 456-7890",
    role: "teacher",
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Williams",
    email: "emily.w@example.com",
    phoneNumber: "+1 (555) 789-0123",
    role: "principal",
  },
  {
    id: 5,
    firstName: "David",
    lastName: "Brown",
    email: "david.b@example.com",
    phoneNumber: "+1 (555) 234-5678",
    role: "librarian",
  },
  {
    id: 6,
    firstName: "Sarah",
    lastName: "Jones",
    email: "sarah.j@example.com",
    phoneNumber: "+1 (555) 345-6789",
    role: "counselor",
  },
  {
    id: 7,
    firstName: "Robert",
    lastName: "Garcia",
    email: "robert.g@example.com",
    phoneNumber: "+1 (555) 567-8901",
    role: "it_staff",
  },
  {
    id: 8,
    firstName: "Lisa",
    lastName: "Miller",
    email: "lisa.m@example.com",
    phoneNumber: "+1 (555) 678-9012",
    role: "accountant",
  },
  {
    id: 9,
    firstName: "James",
    lastName: "Davis",
    email: "james.d@example.com",
    phoneNumber: "+1 (555) 789-0123",
    role: "teacher",
  },
  {
    id: 10,
    firstName: "Jennifer",
    lastName: "Rodriguez",
    email: "jennifer.r@example.com",
    phoneNumber: "+1 (555) 890-1234",
    role: "receptionist",
  },
]

// Role display mapping
const roleDisplayMap: Record<string, { label: string; color: string }> = {
  admin: { label: "Administrator", color: "bg-red-500" },
  principal: { label: "Principal", color: "bg-purple-500" },
  vice_principal: { label: "Vice Principal", color: "bg-purple-400" },
  teacher: { label: "Teacher", color: "bg-blue-500" },
  class_teacher: { label: "Class Teacher", color: "bg-blue-600" },
  subject_teacher: { label: "Subject Teacher", color: "bg-blue-400" },
  counselor: { label: "Counselor", color: "bg-green-500" },
  librarian: { label: "Librarian", color: "bg-amber-500" },
  accountant: { label: "Accountant", color: "bg-pink-500" },
  receptionist: { label: "Receptionist", color: "bg-teal-500" },
  it_staff: { label: "IT Staff", color: "bg-indigo-500" },
  maintenance: { label: "Maintenance", color: "bg-gray-500" },
  security: { label: "Security", color: "bg-gray-600" },
  student: { label: "Student", color: "bg-green-400" },
  parent: { label: "Parent/Guardian", color: "bg-orange-500" },
}

export function UsersTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (roleDisplayMap[user.role]?.label || "").toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search users..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                  {user.firstName} {user.lastName}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell>
                  <Badge className={roleDisplayMap[user.role]?.color || "bg-gray-500"}>
                    {roleDisplayMap[user.role]?.label || user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuSubTrigger asChild>
                      <Button  variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Edit User</DropdownMenuItem>
                      <DropdownMenuItem>Reset Password</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete User</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <strong>{filteredUsers.length}</strong> of <strong>{users.length}</strong> users
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">First page</span>
          </Button>
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
          <Button variant="outline" size="icon">
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Last page</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

