'use server'

import MonthCalendar from "@/app/containers/dashboard-page/calendar";
import DebtSection from "@/app/containers/dashboard-page/debt-section";
import FetchDebts from "@/app/actions/Dashboard/fetchDebts"


const getProjects = async () => {

    const data = await FetchDebts();

    return (
        <>
            <div className="flex flex-col w-full h-screen overflow-y-auto gap-20">
                <div className="flex flex-row justify-center w-full gap-5">
                    <div className="flex justify-center h-screen w-5/12 shrink-0 p-3 border rounded-md shadow-md">
                        <DebtSection debtList={data} />
                    </div>
                    <div className="flex justify-center h-screen w-6/12 shrink-0 p-3 border rounded-md shadow-md">
                    </div>
                </div>
                <div className="flex justify-center h-screen w-full shrink-0">
                    <div className="w-5/6">
                        <MonthCalendar />
                    </div>
                </div>
            </div>
        </>
    );
}

export default getProjects;