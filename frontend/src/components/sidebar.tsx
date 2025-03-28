"use client"

import type React from "react"

import {
  BookOpen,
  Users,
  GraduationCap,
  Calendar,
  ClipboardList,
  Award,
  Settings,
  HelpCircle,
  LogOut,
  School,
  X,
  UserPlus,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {open && <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-card shadow-lg transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <Link href="/" className="flex items-center gap-2">
            <School className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EduAdmin</span>
          </Link>
          <button onClick={onClose} className="md:hidden">
            <X className="h-6 w-6" />
            <span className="sr-only">Close sidebar</span>
          </button>
        </div>

        <nav className="flex flex-col gap-0.5 p-4">
          <NavItem href="/" icon={BookOpen} label="Dashboard" active={pathname === "/"} />
          <NavItem href="/students" icon={Users} label="Students" active={pathname.startsWith("/students")} />
          <NavItem href="/teachers" icon={GraduationCap} label="Teachers" active={pathname.startsWith("/teachers")} />
          <NavItem href="/classes" icon={Calendar} label="Classes" active={pathname.startsWith("/classes")} />
          <NavItem
            href="/attendance"
            icon={ClipboardList}
            label="Attendance"
            active={pathname.startsWith("/attendance")}
          />
          <NavItem href="/events" icon={Award} label="Events" active={pathname.startsWith("/events")} />
          <NavItem href="/users" icon={UserPlus} label="Users" active={pathname.startsWith("/users")} />

          <div className="mt-auto pt-4">
            <NavItem href="/settings" icon={Settings} label="Settings" active={pathname.startsWith("/settings")} />
            <NavItem href="/help" icon={HelpCircle} label="Help & Support" active={pathname.startsWith("/help")} />
            <NavItem href="/logout" icon={LogOut} label="Logout" active={pathname.startsWith("/logout")} />
          </div>
        </nav>
      </div>
    </>
  )
}

interface NavItemProps {
  href: string
  icon: React.ElementType
  label: string
  active?: boolean
}

function NavItem({ href, icon: Icon, label, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
        active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
      }`}
    >
      <Icon className="h-5 w-5" />
      {label}
    </Link>
  )
}

