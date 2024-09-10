"use client"

import React, { useState } from 'react';
import EventCalendar from "@/components/@page-components/calendar/EventCalendar";
import Announcements from "@/components/@page-components/announcements/page";
import BigCalendar from "@/components/@shared-components/BigCalendar/page";
import "react-big-calendar/lib/css/react-big-calendar.css"

const StudentPage = () => {
    // Get current date
    const today = new Date();
    const currentDate = today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

    // State to handle tabs
    const [activeTab, setActiveTab] = useState('Day');

    return (
        <div className='p-4 flex gap-4 flex-col xl:flex-row text-black '>
            {/* LEFT */}
            <div className='w-full xl:w-2/3 flex flex-col'>
                <h1 className="font-semibold text-xl">Schedule (4A)</h1>
                <BigCalendar />

                {/* Display current date */}
                <div>{currentDate}</div>

            </div>

            {/* RIGHT */}
            <div className='w-full xl:w-1/3 flex flex-col gap-8'>
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    )
}

export default StudentPage;
