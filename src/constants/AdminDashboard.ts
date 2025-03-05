import { BriefcaseBusiness, Home, UserCog, Users } from "lucide-react";

export const AdminSummaries = [
  {
    icon: Users,
    title: "Students",
    //count: 15000,
    bgColor: "bg-[#d1f3e0]",
    iconColor: "text-[#3cb878]",
    apiEndpoint: '/api/student/studentCount'
  },
  {
    icon: Home,
    title: "Teachers",
    count: 20000,
    bgColor: "bg-[#e0f3f3]",
    iconColor: "text-[#3c87b8]",
    apiEndpoint: ''
  },
  {
    icon: BriefcaseBusiness,
    title: "Staff",
    count: 5000,
    bgColor: "bg-[#f3e0e0]",
    iconColor: "text-[#b83c3c]",
    apiEndpoint: ''
  },
  {
    icon: UserCog,
    title: "Administrators",
    count: 1000,
    bgColor: "bg-[#e0e3f3]",
    iconColor: "text-[#3c3cb8]",
    apiEndpoint: ''
  }
];
