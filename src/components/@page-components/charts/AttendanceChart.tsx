"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Image from "next/image";

const data = [
  { name: "Mon", present: 40, absent: 24 },
  { name: "Tue", present: 30, absent: 40 },
  { name: "Wed", present: 80, absent: 9 },
  { name: "Thur", present: 27, absent: 39 },
  { name: "Fri", present: 90, absent: 40 },
];

const AttendanceChart = () => {
  return (
    <div className="bg-card rounded-xl p-4 h-full shadow-card border border-border text-card-foreground">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Attendance</h2>
        <button type="button" className="p-1 rounded-full hover:bg-muted transition-colors">
          <Image src="/moreDark.png" alt="More" width={20} height={20} />
        </button>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-border" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)" }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)" }} />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "1px solid var(--border)",
              backgroundColor: "var(--card)",
              color: "var(--card-foreground)",
            }}
          />
          <Legend align="left" verticalAlign="top" wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
          <Bar dataKey="present" fill="#FAE27C" legendType="circle" radius={[10, 10, 0, 0]} minPointSize={0} />
          <Bar dataKey="absent" fill="#C3EBFA" legendType="circle" radius={[10, 10, 0, 0]} minPointSize={0} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
