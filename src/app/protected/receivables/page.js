'use server'

import ReceivablesSection from "@/app/containers/receivables-page/receivables-section.js"
import FetchReceivables from "@/app/actions/Receivables/fetchReceivables"

const ReceivablesPage = async () => {
    const data = await FetchReceivables();

    return (
        <div className="w-11/12">
            <div className="flex flex-col">
                <div className="my-5">
                    <h1 className="text-3xl font-semibold">Receivables</h1>
                </div>
                <div className="">
                    <ReceivablesSection receivables={data} />
                </div>
            </div>
        </div>
    )
}

export default ReceivablesPage;