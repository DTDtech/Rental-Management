'use client'

import DeleteOrder from "@/app/actions/Orders/deleteOrder"
import EditModal from "@/app/containers/orders-page/edit-modal"
import CreateModal from "@/app/containers/orders-page/create-modal"
import CreateOrderButton from "@/app/containers/orders-page/create-button"
import FilterOrdersDropdown from "@/app/containers/orders-page/filter-dropdown"
import { useState } from "react"
import Link from "next/link"

const OrdersSection = ({ orders }) => {

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [editModalData, setEditModalData] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    const [filter, setFilter] = useState("");

    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "VND",
    });

    const FilterOrders = () => {
        if (filter === "byFurthestDate") {
            const filteredOrderArray = orders.slice(0).sort(function (a, b) {
                return Math.abs(new Date(b.return_date)) - Math.abs(new Date(a.return_date));
            })
            return filteredOrderArray;
        }
        else if (filter === "byClosestDate") {
            const filteredOrderArray = orders.slice(0).sort(function (a, b) {
                return Math.abs(new Date(a.return_date)) - Math.abs(new Date(b.return_date));
            })
            return filteredOrderArray;
        }
        else {
            const filteredOrderArray = orders;
            return filteredOrderArray;
        }
    }

    const filteredOrders = FilterOrders();

    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <CreateOrderButton onClose={() => {
                        setShowCreateModal(true);
                    }
                    } />
                </div>
                <div>
                    <FilterOrdersDropdown onSelectFilter={setFilter} />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex overflow-x-auto mt-5 rounded-lg shadow-xl w-full">
                    <table className="table-fixed text-black bg-white text-center w-full">
                        <thead className="bg-lavenderFloral text-white uppercase">
                            <tr className="">
                                <th scope="col" className="px-2 py-4 w-48">Name</th>
                                <th scope="col" className="px-2 py-4">Pick-up date</th>
                                <th scope="col" className="px-2 py-4 w-48">Return date</th>
                                <th scope="col" className="px-2 py-4">Debt</th>
                                <th scope="col" className="px-2 py-4">Paid</th>
                                <th scope="col" className="px-2 py-4 w-48">Note</th>
                                <th scope="col" className="px-2 py-4 w-48">Status</th>
                                <th scope="col" className="px-2 py-4">Edit/Delete</th>
                                <th scope="col" className="px-2 py-4 w-20">More</th>
                            </tr>
                        </thead>
                        <tbody className="bg-slateBlue text-white">
                            {filteredOrders.map((filteredOrder) => (
                                <tr key={filteredOrder._id}>
                                    <td className="px-2 py-4">{filteredOrder.name}</td>
                                    <td className="px-2 py-4">{filteredOrder.pick_up_date?.toLocaleDateString("es-US")}</td>
                                    <td className="px-2 py-4">{filteredOrder.return_date?.toLocaleDateString("es-US")}</td>
                                    <td className="px-2 py-4">{filteredOrder.debt ? currencyFormatter.format(filteredOrder.debt) : null}</td>
                                    <td className="px-2 py-4">{filteredOrder.paid ? currencyFormatter.format(filteredOrder.paid) : null}</td>
                                    <td className="px-2 py-4 truncate">{filteredOrder.note}</td>
                                    <td className="px-2 py-4">{filteredOrder.status}</td>
                                    <td className="px-2 py-4">
                                        <button onClick={() => {
                                            setEditModalData(filteredOrder);
                                            setShowEditModal(true);
                                        }
                                        }>
                                            <i className="fa-regular fa-pen-to-square mr-3"></i>
                                        </button>
                                        <button onClick={() => DeleteOrder(filteredOrder._id)}>
                                            <i className="fa-regular fa-trash-can"></i>
                                        </button>
                                    </td>
                                    <td className="px-2 py-4 flex">
                                        <Link href={`/protected/full_order/${filteredOrder._id}`} className="grow">
                                            <button>
                                                <i className="fa-solid fa-angle-right"></i>
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
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
        </>
    )
}

export default OrdersSection;

