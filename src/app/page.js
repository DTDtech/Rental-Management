'use client'

import MonthCalendar from "./containers/dashboard-page/calendar";
import { useEffect } from "react";

const getProjects = () => {

    return (
        <>
            <div className="flex w-full h-screen">
                <div className="h-3/4 w-3/4">
                    <MonthCalendar />
                </div>
            </div>
        </>
    );
}

export default getProjects;