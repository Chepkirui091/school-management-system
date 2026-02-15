"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { role } from "@/lib/data";
import { SidebarIcon } from "./SidebarIcons";

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: "home", label: "Home", href: "/admin", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "teacher", label: "Teachers", href: "/list/teachers", visible: ["admin", "teacher"] },
      { icon: "student", label: "Students", href: "/list/students", visible: ["admin", "teacher"] },
      { icon: "parent", label: "Parents", href: "/list/parents", visible: ["admin", "teacher"] },
      { icon: "subject", label: "Subjects", href: "/list/subjects", visible: ["admin"] },
      { icon: "class", label: "Classes", href: "/list/classes", visible: ["admin", "teacher"] },
      { icon: "lessons", label: "Lessons", href: "/list/lessons", visible: ["admin", "teacher"] },
      { icon: "exams", label: "Exams", href: "/list/exams", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "assignment", label: "Assignments", href: "/list/assignments", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "result", label: "Results", href: "/list/results", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "attendance", label: "Attendance", href: "/list/attendance", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "calendar", label: "Events", href: "/list/events", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "message", label: "Messages", href: "/list/messages", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "announcement", label: "Announcements", href: "/list/announcements", visible: ["admin", "teacher", "student", "parent"] },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: "profile", label: "Profile", href: "/profile", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "setting", label: "Settings", href: "/settings", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "logout", label: "Logout", href: "/logout", visible: ["admin", "teacher", "student", "parent"] },
    ],
  },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className="flex-1 overflow-y-auto py-2 px-2">
      {menuItems.map((section) => (
        <div key={section.title} className="mb-6">
          <span className="hidden lg:block text-slate-500 text-xs font-medium uppercase tracking-wider px-3 mb-2">
            {section.title}
          </span>
          <div className="space-y-0.5">
            {section.items.map((item) => {
              if (!item.visible.includes(role)) return null;
              const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className={`flex items-center justify-center lg:justify-start gap-3 py-2.5 px-3 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-white/15 text-lamaSky font-medium"
                      : "text-slate-400 hover:bg-white/10 hover:text-slate-200"
                  }`}
                >
                  <SidebarIcon name={item.icon} />
                  <span className="hidden lg:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Menu;
