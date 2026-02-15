"use client"

import React, { useState } from 'react';
import Page from "@/components/@page-components/calendar/EventCalendar/page";
import Announcements from "@/components/@page-components/announcements/page";
import BigCalendar from "@/components/@page-components/calendar/BigCalendar/page";
import "react-big-calendar/lib/css/react-big-calendar.css"
import EventCalendar from "@/components/@page-components/calendar/EventCalendar/page";

const StudentPage = () => {
    // Get current date
    const today = new Date();
    const currentDate = today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

    // State to handle tabs
    const [activeTab, setActiveTab] = useState('Day');

    return (
        <div className="p-4 md:p-6 flex gap-6 flex-col xl:flex-row text-foreground flex-1">
            <div className="w-full xl:w-2/3 flex flex-col gap-4">
                <h1 className="font-semibold text-xl">Schedule (4A)</h1>
                <BigCalendar />
                <p className="text-sm text-muted-foreground">{currentDate}</p>
            </div>
            <div className="w-full xl:w-1/3 flex flex-col gap-8">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    )
}

export default StudentPage;
