'use server'

import ReceivablesSection from "@/app/containers/receivables-page/receivables-section"
import { FetchReceivables } from "@/app/actions/fetchData"

const ReceivablesPage = async () => {
    const data = await FetchReceivables();

    return (
        <div className="bg-delftBlue min-h-screen pt-10 flex justify-center">
            <ReceivablesSection receivables={data} />
        </div>
    )
}

export default ReceivablesPage;