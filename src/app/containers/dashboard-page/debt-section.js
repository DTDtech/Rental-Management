'use server'

const DebtSection = async ({ debtList }) => {

    return (
        <div className="overflow-y-auto w-full">
            <table className="table-auto text-black bg-white text-center w-full">
                <caption className="caption-top font-semibold text-2xl my-2">
                    Debts
                </caption>
                <thead className="bg-lavenderFloral text-white uppercase sticky top-0">
                    <tr className="h-12">
                        <th scope="col" className="px-2 py-4">Name</th>
                        <th scope="col" className="px-2 py-4">Debt</th>
                        <th scope="col" className="px-2 py-4">Return date</th>
                    </tr>
                </thead>
                <tbody className="bg-slateBlue text-white">
                    {debtList.map((debtRecord) => (
                        <tr key={debtRecord._id} className="h-12">
                            <td className="px-2 py-4">{debtRecord.name}</td>
                            <td className="px-2 py-4">{debtRecord.debt ? new Intl.NumberFormat('en-US').format(debtRecord.debt) : null}</td>
                            <td className="px-2 py-4">{debtRecord.return_date?.toLocaleDateString("es-US")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DebtSection;