import React from 'react';
import UserCard from "@/components/@page-components/UserCard";
import CountChart from "@/components/@page-components/charts/CountChart";
import AttendanceChart from "@/components/@page-components/charts/AttendanceChart";
import FinanceChart from "@/components/@page-components/charts/FinanceChart";
import Page from "@/components/@page-components/calendar/EventCalendar/page";
import Announcements from "@/components/@page-components/announcements/page";
import EventCalendar from "@/components/@page-components/calendar/EventCalendar/page";

export default function AdminPage() {
    return (
        <>
            <div className="p-4 flex gap-4 flex-col md:flex-row text-black">
                {/*LEFT*/}
                <div className='w-full lg:w-2/3'>
                    {/*USER CARDS*/}
                    <div className="flex gap-4 justify-between flex-wrap">
                        <UserCard type="student"/>
                        <UserCard type="teacher"/>
                        <UserCard type="parent"/>
                        <UserCard type="staff"/>
                    </div>
                    {/*MIDDLE CHARTS*/}
                    <div className="flex gap-4 flex-col lg:flex-row ">
                        {/*COUNT CHART*/}
                        <div className="w-full  lg:w-1/3 h-[450px]">
                            <CountChart/>
                        </div>
                        {/*ATTENDANCE CHART*/}
                        <div className="w-full  lg:w-2/3 h-[450px]">
                            <AttendanceChart/>
                        </div>
                    </div>
                    {/*BOTTOM CHART*/}
                    <div className="w-full h-[500px]">
                        <FinanceChart/>
                    </div>
                </div>

                {/*RIGHT*/}
                <div className='w-full lg:w-1/3 flex flex-col gap-8'>
                    <EventCalendar/>
                    <Announcements />
                </div>
            </div>
        </>
    )
}

