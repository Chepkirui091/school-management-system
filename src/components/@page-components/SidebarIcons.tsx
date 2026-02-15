import React from "react";
import {
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineUsers,
  HiOutlineBookOpen,
  HiOutlineBuildingOffice2,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentText,
  HiOutlineClipboardDocumentCheck,
  HiOutlineChartBar,
  HiOutlineCalendarDays,
  HiOutlineChatBubbleLeftRight,
  HiOutlineMegaphone,
  HiOutlineUser,
  HiOutlineCog6Tooth,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";

const size = 20;
const className = "flex-shrink-0 opacity-90";

const icons: Record<string, React.ReactNode> = {
  home: <HiOutlineHome className={className} size={size} />,
  teacher: <HiOutlineUserGroup className={className} size={size} />,
  student: <HiOutlineAcademicCap className={className} size={size} />,
  parent: <HiOutlineUsers className={className} size={size} />,
  subject: <HiOutlineBookOpen className={className} size={size} />,
  class: <HiOutlineBuildingOffice2 className={className} size={size} />,
  lessons: <HiOutlineClipboardDocumentList className={className} size={size} />,
  exams: <HiOutlineDocumentText className={className} size={size} />,
  assignment: <HiOutlineClipboardDocumentCheck className={className} size={size} />,
  result: <HiOutlineChartBar className={className} size={size} />,
  attendance: <HiOutlineCalendarDays className={className} size={size} />,
  calendar: <HiOutlineCalendarDays className={className} size={size} />,
  message: <HiOutlineChatBubbleLeftRight className={className} size={size} />,
  announcement: <HiOutlineMegaphone className={className} size={size} />,
  profile: <HiOutlineUser className={className} size={size} />,
  setting: <HiOutlineCog6Tooth className={className} size={size} />,
  logout: <HiOutlineArrowRightOnRectangle className={className} size={size} />,
};

export function SidebarIcon({ name }: { name: string }) {
  return <>{icons[name] ?? icons.home}</>;
}
