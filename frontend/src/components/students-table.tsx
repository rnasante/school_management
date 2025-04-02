"use client"
import Link from "next/link"
import { useState } from "react"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
// import { Label } from "./ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

// Sample student data
const students = [
  { id: 1, name: "Emma Johnson", grade: "Grade 8", class: "8A", attendance: "98%", gpa: "3.9" },
  { id: 2, name: "Liam Smith", grade: "Grade 7", class: "7B", attendance: "95%", gpa: "3.7" },
  { id: 3, name: "Olivia Brown", grade: "Grade 8", class: "8A", attendance: "97%", gpa: "4.0" },
  { id: 4, name: "Noah Davis", grade: "Grade 6", class: "6C", attendance: "92%", gpa: "3.5" },
  { id: 5, name: "Ava Wilson", grade: "Grade 7", class: "7A", attendance: "99%", gpa: "3.8" },
  { id: 6, name: "William Taylor", grade: "Grade 8", class: "8B", attendance: "94%", gpa: "3.6" },
  { id: 7, name: "Sophia Martinez", grade: "Grade 6", class: "6A", attendance: "96%", gpa: "3.9" },
  { id: 8, name: "James Anderson", grade: "Grade 7", class: "7C", attendance: "91%", gpa: "3.4" },
  { id: 9, name: "Isabella Thomas", grade: "Grade 8", class: "8A", attendance: "98%", gpa: "4.0" },
  { id: 10, name: "Benjamin Jackson", grade: "Grade 6", class: "6B", attendance: "93%", gpa: "3.7" },
]

export function StudentsTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.grade.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.class.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search students..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Link href="/students/add">
          <Button>Add Student</Button>
        </Link>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Attendance</TableHead>
              <TableHead>GPA</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.grade}</TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell>{student.attendance}</TableCell>
                <TableCell>{student.gpa}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Edit Details</DropdownMenuItem>
                      <DropdownMenuItem>View Grades</DropdownMenuItem>
                      <DropdownMenuItem>Contact Parents</DropdownMenuItem>
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
          Showing <strong>10</strong> of <strong>50</strong> students
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

