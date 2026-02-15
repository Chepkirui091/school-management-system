"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import Image from "next/image";
import "react-calendar/dist/Calendar.css";

const events = [
  { id: 1, title: "Lorem Ipsum", time: "12:00–2:00 PM", description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit" },
  { id: 2, title: "Lorem Ipsum", time: "12:00–2:00 PM", description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit" },
  { id: 3, title: "Lorem Ipsum", time: "12:00–2:00 PM", description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit" },
];

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-card text-card-foreground p-4 rounded-xl shadow-card border border-border">
      <Calendar onChange={onChange} value={value} className="!bg-transparent" />
      <div className="flex items-center justify-between mt-4">
        <h2 className="text-lg font-semibold">Events</h2>
        <button type="button" className="p-1 rounded-full hover:bg-muted transition-colors">
          <Image src="/moreDark.png" alt="More" width={20} height={20} />
        </button>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-4 rounded-lg border-2 border-border border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple bg-muted/30 dark:bg-white/5"
          >
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <h3 className="font-semibold text-foreground">{event.title}</h3>
              <span className="text-muted-foreground text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
