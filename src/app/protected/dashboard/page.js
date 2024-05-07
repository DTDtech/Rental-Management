'use server'

import MonthCalendar from "@/app/containers/dashboard-page/calendar";
import DebtSection from "@/app/containers/dashboard-page/debt-section";
import FetchDebts from "@/app/actions/Dashboard/fetchDebts"


const getProjects = async () => {

    const data = await FetchDebts();

    return (
        <>
            <div className="flex w-full h-screen justify-center">
                <div>
                    <DebtSection debts={data} />
                </div>
                <div className="h-3/4 w-3/4">
                    <MonthCalendar />
                </div>
            </div>
        </>
    );
}

export default getProjects;