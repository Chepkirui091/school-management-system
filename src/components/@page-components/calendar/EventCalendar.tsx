"use client"

import {useState} from "react";
import Calendar from "react-calendar";
import Image from "next/image";

const EventCalendar = () => {
    type ValuePiece = Date | null;

    type Value = ValuePiece | [ValuePiece, ValuePiece];
    const [value, onChange] = useState<Value>(new Date());

    const events = [
        {
            id: 1,
            title: "Lorem Ipsum",
            time: "12:00-2:00nPM",
            description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
            id: 2,
            title: "Lorem Ipsum",
            time: "12:00-2:00nPM",
            description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
            id: 3,
            title: "Lorem Ipsum",
            time: "12:00-2:00nPM",
            description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
        }
    ]
    return (
        <div className="bg-">
            <Calendar onChange={onChange} value={value}/>
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20}/>
            </div>
            <div className="flex flex-col gap-4">
                {events.map(events => (
                    <div
                        className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
                        key={events.id}>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-gray-600 ">{events.title}</h1>
                            <span className="text-gray-800 text-xs">{events.time}</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-400">{events.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalendar