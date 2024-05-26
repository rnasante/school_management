import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Students",
          active: pathname.includes("/student"),
          icon: SquarePen,
          submenus: [
            {
              href: "/students",
              label: "All Students",
              active: pathname === "/students"
            },
            {
              href: "/students/new",
              label: "Add Student",
              active: pathname === "/students/new"
            },
            {
              href: "/students/edit",
              label: "Edit Student",
              active: pathname === "/students/edit"
            }
          ]
        },
        {
          href: "",
          label: "Teachers",
          active: pathname.includes("/teachers"),
          icon: Bookmark,
          submenus: [
            {
              href: "/teachers",
              label: "All Teachers",
              active: pathname === "/teachers"
            },
            {
              href: "/teachers/add",
              label: "Add Teacher",
              active: pathname === "/teachers/add"
            },
            {
              href: "/teachers/edit",
              label: "Edit Teacher",
              active: pathname === "/teachers/edit"
            }
          ]
        },
        {
          href: "/tags",
          label: "Tags",
          active: pathname.includes("/tags"),
          icon: Tag,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/users",
          label: "Users",
          active: pathname.includes("/users"),
          icon: Users,
          submenus: []
        },
        {
          href: "/account",
          label: "Account",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: []
        }
      ]
    }
  ];
}
