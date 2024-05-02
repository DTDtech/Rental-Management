'use client'

import DeleteReceivable from "@/app/actions/Receivables/deleteReceivable"
import EditModal from "@/app/containers/receivables-page/edit-modal"
import CreateModal from "@/app/containers/receivables-page/create-modal"
import CreateReceivableButton from "@/app/containers/receivables-page/create-button"
import FilterReceivablesDropdown from "@/app/containers/receivables-page/filter-dropdown"
import { useEffect, useState } from "react"

const ReceivablesSection = ({ receivables }) => {

    const [editModalData, setEditModalData] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    const [showCreateModal, setShowCreateModal] = useState(false);

    const [filter, setFilter] = useState("");

    const [filteredReceivables, setFilteredReceivables] = useState(receivables);

    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "VND",
    });

    useEffect(() => {
        setFilteredReceivables(receivables);
        const FilterReceivables = () => {
            if (filter === "byClosestDate") {
                const filteredReceivableArray = receivables.slice(0).sort(function (a, b) {
                    return new Date(b.date) - new Date(a.date);
                })
                setFilteredReceivables(filteredReceivableArray);
            }
            else if (filter === "byOldestDate") {
                const filteredReceivableArray = receivables.slice(0).sort(function (a, b) {
                    return new Date(a.date) - new Date(b.date);
                })
                setFilteredReceivables(filteredReceivableArray);
            }
        }
        FilterReceivables();
    }, [filter, receivables]);

    return (
        <div className="w-11/12">
            <div className="flex justify-between items-center">
                <div>
                    <CreateReceivableButton onClose={() => {
                        setShowCreateModal(true);
                    }
                    } />
                </div>
                <div>
                    <FilterReceivablesDropdown onSelectFilter={setFilter} />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex overflow-x-auto mt-5 rounded-lg w-full">
                    <table className="table-fixed drop-shadow-md text-black bg-white text-center w-full">
                        <thead className="bg-deepLilac text-white uppercase">
                            <tr className="">
                                <th scope="col" className="px-2">Name</th>
                                <th scope="col" className="px-2 py-4">Date</th>
                                <th scope="col" className="px-2 py-4 w-48">Contract ID</th>
                                <th scope="col" className="px-2 py-4 w-48">Phone Number</th>
                                <th scope="col" className="px-2 py-4">Debt</th>
                                <th scope="col" className="px-2 py-4">Paid</th>
                                <th scope="col" className="px-2 py-4 w-48">Note</th>
                                <th scope="col" className="px-2 py-4 w-48">Status</th>
                                <th scope="col" className="px-2 py-4">Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody className="bg-darkSlateBlue text-white">
                            {filteredReceivables.map((filteredReceivable) => (
                                <tr key={filteredReceivable.id}>
                                    <td className="px-2 py-4">{filteredReceivable.name}</td>
                                    <td className="px-2 py-4">{filteredReceivable.date?.toLocaleDateString("es-US")}</td>
                                    <td className="px-2 py-4">{filteredReceivable.contract_id}</td>
                                    <td className="px-2 py-4">{filteredReceivable.phone_number}</td>
                                    <td className="px-2 py-4">{filteredReceivable.debt ? currencyFormatter.format(filteredReceivable.debt) : null}</td>
                                    <td className="px-2 py-4">{filteredReceivable.paid ? currencyFormatter.format(filteredReceivable.paid) : null}</td>
                                    <td className="px-2 py-4 truncate">{filteredReceivable.note}</td>
                                    <td className="px-2 py-4">{filteredReceivable.status}</td>
                                    <td className="px-2 py-4">
                                        <button onClick={() => {
                                            setEditModalData(filteredReceivable);
                                            setShowEditModal(true);
                                        }
                                        }>
                                            <i className="fa-regular fa-pen-to-square mr-3"></i>
                                        </button>
                                        <button onClick={() => DeleteReceivable(filteredReceivable.id)}>
                                            <i className="fa-regular fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {/* {receivables.map((receivable) => (
                                <tr key={receivable.id}>
                                    <td className="px-2 py-4">{receivable.name}</td>
                                    <td className="px-2 py-4">{receivable.date?.toLocaleDateString("es-US")}</td>
                                    <td className="px-2 py-4">{receivable.contract_id}</td>
                                    <td className="px-2 py-4">{receivable.phone_number}</td>
                                    <td className="px-2 py-4">{receivable.debt ? currencyFormatter.format(receivable.debt) : null}</td>
                                    <td className="px-2 py-4">{receivable.paid ? currencyFormatter.format(receivable.paid) : null}</td>
                                    <td className="px-2 py-4 truncate">{receivable.note}</td>
                                    <td className="px-2 py-4">{receivable.status}</td>
                                    <td className="px-2 py-4">
                                        <button onClick={() => {
                                            setEditModalData(receivable);
                                            setShowEditModal(true);
                                        }
                                        }>
                                            <i className="fa-regular fa-pen-to-square mr-3"></i>
                                        </button>
                                        <button onClick={() => DeleteReceivable(receivable.id)}>
                                            <i className="fa-regular fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>

                    <>
                        {editModalData && showEditModal ? (
                            <EditModal
                                data={editModalData}
                                onClose={() => {
                                    setShowEditModal(false);
                                }}
                            />) : null}
                    </>

                    <>
                        {showCreateModal ? (
                            <CreateModal onClose={() => {
                                setShowCreateModal(false);
                            }}
                            />) : null}
                    </>

                </div>
            </div>
        </div>
    )
}

export default ReceivablesSection;

