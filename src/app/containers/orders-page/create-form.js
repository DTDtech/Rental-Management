'use client'

import CreateOrder from "@/app/actions/Orders/createOrder"
import { useState } from "react"

const CreateOrderForm = ({ onCloseButton }) => {
    const [validationError, setValidationError] = useState("")

    return (
        <form action={CreateOrder} onSubmit={onCloseButton}>
            <div className="p-5">
                <div className="flex flex-wrap mb-5 justify-start space-x-4">
                    <div>
                        <label htmlFor='name' className='text-lg font-medium leading-8 text-pianoBlack mr-2'> Name: </label>
                        <input type="text" name="name" id="name"
                            className="rounded-md outline outline-2 outline-delftBlue px-2 pb-2 pt-1" required />
                    </div>

                    <div>
                        <label htmlFor='pick_up_date' className='text-lg font-medium leading-8 text-pianoBlack mr-2'> Pick-up date: </label>
                        <input type="date" name="pick_up_date" id="pick_up_date"
                            className="rounded-md outline outline-2 outline-delftBlue px-2 pb-2 pt-1" required/>
                    </div>

                    <div>
                        <label htmlFor='return_date' className='text-lg font-medium leading-8 text-pianoBlack mr-2'> Return date: </label>
                        <input type="date" name="return_date" id="return_date"
                            className="rounded-md outline outline-2 outline-delftBlue px-2 pb-2 pt-1" required/>
                    </div>

                    <div>
                        <label htmlFor='contract_id' className='text-lg font-medium leading-8 text-pianoBlack mr-2'> Contract ID: </label>
                        <input type="text" name="contract_id" id="contract_id"
                            className="rounded-md outline outline-2 outline-delftBlue px-2 pb-2 pt-1" required/>
                    </div>
                </div>

                <div className="flex flex-wrap mb-5 justify-start space-x-4">
                    <div>
                        <label htmlFor='phone_number' className='text-lg font-medium leading-8 text-pianoBlack mr-2'> Phone Number: </label>
                        <input type="tel" name="phone_number" id="phone_number"
                            className="rounded-md outline outline-2 outline-delftBlue px-2 pb-2 pt-1" required
                            pattern="[0-9]{10}"/>
                    </div>

                    <div>
                        <label htmlFor='debt' className='text-lg font-medium leading-8 text-pianoBlack mr-2'> Debt: </label>
                        <input type="number" name="debt" id="debt"
                            className="rounded-md outline outline-2 outline-delftBlue px-2 pb-2 pt-1" required/>
                    </div>

                    <div>
                        <label htmlFor='paid' className='text-lg font-medium leading-8 text-pianoBlack mr-2'> Paid: </label>
                        <input type="number" name="paid" id="paid"
                            className="rounded-md outline outline-2 outline-delftBlue px-2 pb-2 pt-1" required/>
                    </div>

                    <div className="flex items-center">
                        <label htmlFor='status' className='text-lg font-medium leading-8 text-pianoBlack mr-2'> Status: </label>
                        <select name="status" id="status"
                            className="rounded-md outline outline-2 outline-delftBlue px-2 pb-2 pt-1 bg-white" required>
                            <option value=""> Select status </option>
                            <option value="Delivering-Unpaid"> Delivering - Unpaid </option>
                            <option value="Received-Paid"> Received - Paid </option>
                            <option value="Received-Unpaid"> Received - Unpaid </option>
                        </select>
                    </div>

                </div>

                <div className="flex mb-5 justify-center space-x-4">
                    <label htmlFor='note' className='text-lg font-medium leading-8 text-pianoBlack mr-2'> Note: </label>
                    <textarea name="note" id="note" rows={4} cols={50} className="rounded-sm outline outline-2 outline-delftBlue p-2"></textarea>
                </div>

                <div className="flex justify-end space-x-4">
                    <button type='submit' className='rounded-lg shadow bg-atomicPink/50 focus:outline-none 
               			p-3 text-sm text-white'>
                        Confirm
                    </button>
                    <button type='button' className='rounded-lg shadow bg-stone-500 focus:outline-none 
               		    p-3 text-sm text-white' onClick={onCloseButton}>
                        Close
                    </button>
                </div>
            </div>

        </form >
    )
}

export default CreateOrderForm;