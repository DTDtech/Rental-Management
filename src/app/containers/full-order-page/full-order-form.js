'use client'

import UpdateOrder from "@/app/actions/Orders/updateOrder"
import { useRouter } from "next/navigation";

const FullOrderForm = ({ placeholderData }) => {
    const router = useRouter();

    const UpdateOrderWithPlaceholder = UpdateOrder.bind(null, placeholderData);

    return (
        <>
            <form action={UpdateOrderWithPlaceholder}>
                <div className="flex flex-col bg-gray-50 p-5">
                    <div className="mb-4">
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            defaultValue={placeholderData.name}
                            className="flex-1 rounded-md shadow-md ring-1 ring-nimbusCloud focus:outline-none focus-within:ring-2 focus-within:ring-inset 
						focus-within:ring-atomicPink pl-3 text-sm p-2 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="pick_up_date" className="mb-2 block text-sm font-medium">Pick-up date:</label>
                        <input
                            type="date"
                            name="pick_up_date"
                            id="pick_up_date"
                            defaultValue={placeholderData.pick_up_date ?
                                new Date(placeholderData.pick_up_date + "Z").toISOString().split('T')[0] : null}
                            className="flex-1 rounded-md shadow-md ring-1 ring-nimbusCloud focus:outline-none focus-within:ring-2 focus-within:ring-inset 
						focus-within:ring-atomicPink pl-3 text-sm p-2 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="return_date" className="mb-2 block text-sm font-medium">Return date:</label>
                        <input
                            type="date"
                            name="return_date"
                            id="return_date"
                            defaultValue={placeholderData.return_date ?
                                new Date(placeholderData.return_date + "Z").toISOString().split('T')[0] : null}
                            className="flex-1 rounded-md shadow-md ring-1 ring-nimbusCloud focus:outline-none focus-within:ring-2 focus-within:ring-inset 
                        focus-within:ring-atomicPink pl-3 text-sm p-2 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="contract_id" className="mb-2 block text-sm font-medium">Contract ID:</label>
                        <input
                            type="text"
                            name="contract_id"
                            id="contract_id"
                            defaultValue={placeholderData.contract_id}
                            className="flex-1 rounded-md shadow-md ring-1 ring-nimbusCloud focus:outline-none focus-within:ring-2 focus-within:ring-inset 
						focus-within:ring-atomicPink pl-3 text-sm p-2 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone_number" className="mb-2 block text-sm font-medium">Phone number:</label>
                        <input
                            type="text"
                            name="phone_number"
                            id="phone_number"
                            defaultValue={placeholderData.phone_number}
                            className="flex-1 rounded-md shadow-md ring-1 ring-nimbusCloud focus:outline-none focus-within:ring-2 focus-within:ring-inset 
						focus-within:ring-atomicPink pl-3 text-sm p-2 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="debt" className="mb-2 block text-sm font-medium">Debt:</label>
                        <input
                            type="number"
                            name="debt"
                            id="debt"
                            defaultValue={placeholderData.debt}
                            className="flex-1 rounded-md shadow-md ring-1 ring-nimbusCloud focus:outline-none focus-within:ring-2 focus-within:ring-inset 
						focus-within:ring-atomicPink pl-3 text-sm p-2 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="paid" className="mb-2 block text-sm font-medium">Paid:</label>
                        <input
                            type="text"
                            name="paid"
                            id="paid"
                            defaultValue={placeholderData.paid}
                            className="flex-1 rounded-md shadow-md ring-1 ring-nimbusCloud focus:outline-none focus-within:ring-2 focus-within:ring-inset 
						focus-within:ring-atomicPink pl-3 text-sm p-2 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor='status' className='text-sm font-medium leading-8 text-pianoBlack mr-2'> Status: </label>
                        <select name="status" id="status" defaultValue={placeholderData.status}
                            className="flex-1 rounded-md shadow-md bg-white ring-1 ring-nimbusCloud focus:outline-none focus-within:ring-2 focus-within:ring-inset 
                            focus-within:ring-atomicPink pl-3 text-sm p-2 w-full">
                            <option value=""> Select status </option>
                            <option value="Delivering-Unpaid"> Delivering - Unpaid </option>
                            <option value="Received-Paid"> Received - Paid </option>
                            <option value="Received-Unpaid"> Received - Unpaid </option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="note" className="mb-2 block text-sm font-medium">Note:</label>
                        <textarea name="note" id="note" defaultValue={placeholderData.note} rows={4} cols={50}
                            className="flex-1 rounded-md shadow-md ring-1 ring-nimbusCloud focus:outline-none focus-within:ring-2 focus-within:ring-inset 
						focus-within:ring-atomicPink pl-3 text-sm p-2 w-full"></textarea>
                    </div>
                    <div className="flex justify-between">
                        <button type="button" className="text-sm font-semibold rounded-lg shadow-md w-16 p-2 bg-white text-gray-400 border-2
                        border-gray-400 hover:text-white hover:bg-gray-400" 
                        onClick={() => router.back()}> Cancel </button>
                        <button type="submit" className="text-sm font-semibold rounded-lg shadow-md w-16 p-2 bg-lime-500 text-white
                        hover:border-2 hover:border-lime-500 hover:bg-white hover:text-lime-500"> Save </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FullOrderForm;