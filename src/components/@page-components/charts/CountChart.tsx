"use client";

import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import Image from "next/image";

const data = [
  { name: "total", count: 110, fill: "var(--card)" },
  { name: "girls", count: 58, fill: "#C3EBFA" },
  { name: "boys", count: 52, fill: "#FAE27C" },
];

const CountChart = () => {
  return (
    <div className="w-full h-full p-4 bg-card rounded-xl shadow-card border border-border text-card-foreground">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Students</h2>
        <button type="button" className="p-1 rounded-full hover:bg-muted transition-colors">
          <Image src="/moreDark.png" alt="More" width={20} height={20} />
        </button>
      </div>
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex justify-center gap-16 mt-2">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <span className="font-bold text-foreground">1,234</span>
          <span className="text-xs text-muted-foreground">Boys (55%)</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <span className="font-bold text-foreground">1,234</span>
          <span className="text-xs text-muted-foreground">Girls (45%)</span>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
