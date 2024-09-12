"use client"

import React, { useState } from 'react';
import Announcements from "@/components/@page-components/announcements/page";
import BigCalendar from "@/components/@shared-components/BigCalendar/page";
import "react-big-calendar/lib/css/react-big-calendar.css"

const ParentPage = () => {
    const [activeTab, setActiveTab] = useState('Day');

    return (
        <div className='p-4 flex gap-4 flex-col xl:flex-row text-black flex-1 '>
            {/* LEFT */}
            <div className='w-full xl:w-2/3 flex flex-col'>
                <h1 className="font-semibold text-xl">Schedule (Jane Doe)</h1>
                <BigCalendar />
            </div>

            {/* RIGHT */}
            <div className='w-full xl:w-1/3 flex flex-col gap-8'>
                <Announcements />
            </div>
        </div>
    )
}

export default ParentPage;
