'use client'

import UpdateAsset from "@/app/actions/Assets/updateAsset"
import { useState } from "react"

const EditAssetForm = ({ placeholderData, onCloseButton }) => {
    const [validationError, setValidationError] = useState("")

    const [pricePerHour, setPricePerHour] = useState(placeholderData.price_per_hour);
    const [pricePerDay, setPricePerDay] = useState(placeholderData.price_per_day);

    const UpdatePricePerHour = (e) => {
        setPricePerHour(String(e.target.value).replace(/,/g, ''));
    }

    const UpdatePricePerDay = (e) => {
        setPricePerDay(String(e.target.value).replace(/,/g, ''));
    }

    const UpdateAssetWithPlaceholder = UpdateAsset.bind(null, placeholderData);

    return (
        <form action={UpdateAssetWithPlaceholder} onSubmit={onCloseButton}>
            <div className="p-5">
                <div className="flex flex-wrap mb-5 justify-start space-x-4">
                    <div>
                        <label htmlFor='name' className='text-lg font-medium leading-8 text-pianoBlack mr-2'> Name: </label>
                        <input type="text" name="name" id="name" defaultValue={placeholderData.name}
                            className="rounded-md outline outline-2 outline-delftBlue px-2 pb-2 pt-1" required />
                    </div>
                    <div>
                        <label htmlFor='in_stock' className='text-lg font-medium leading-8 text-pianoBlack mr-2'> In Stock: </label>
                        <input type="number" name="in_stock" id="in_stock" defaultValue={placeholderData.in_stock}
                            className="rounded-md outline outline-2 outline-delftBlue px-2 pb-2 pt-1" required/>
                    </div>
                    <div>
                        <label htmlFor='price_per_hour' className='text-lg font-medium leading-8 text-pianoBlack mr-2'> Renting price per hour: </label>
                        <input type="text" name="price_per_hour" id="price_per_hour"
                            className="rounded-md outline outline-2 outline-delftBlue px-2 pb-2 pt-1"
                            onChange={UpdatePricePerHour} value={pricePerHour !== '' ? Number(pricePerHour).toLocaleString('en-US') : ''}
                            required
                        />
                    </div>
                </div>

                <div className="flex flex-wrap mb-5 justify-start space-x-4">
                    <div>
                        <label htmlFor='price_per_day' className='text-lg font-medium leading-8 text-pianoBlack mr-2'> Renting price per day: </label>
                        <input type="text" name="price_per_day" id="price_per_day"
                            className="rounded-md outline outline-2 outline-delftBlue px-2 pb-2 pt-1"
                            onChange={UpdatePricePerDay} value={pricePerDay !== '' ? Number(pricePerDay).toLocaleString('en-US') : ''}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='type' className='text-lg font-medium leading-8 text-pianoBlack mr-2'> Type: </label>
                        <select name="type" id="type" defaultValue={placeholderData.type}
                            className="rounded-md outline outline-2 outline-delftBlue px-2 pb-2 pt-1 bg-white" required>
                            <option value=""> Select type </option>
                            <option value="Camera"> Camera </option>
                            <option value="Lighting"> Lighting </option>
                        </select>
                    </div>
                </div>

                <div className="flex mb-5 justify-center">
                    <label htmlFor='description' className='text-lg font-medium leading-8 text-pianoBlack mr-2'> Description: </label>
                    <textarea name="description" id="description" rows={4} cols={50} defaultValue={placeholderData.description}
                        className="rounded-sm outline outline-2 outline-delftBlue p-2"></textarea>
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

export default EditAssetForm;