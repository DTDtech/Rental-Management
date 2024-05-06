'use client'

import CreateAssetForm from "./create-form";

const CreateModal = ({ onClose }) => {

    return (
        <>
            <div className="flex fixed min-h-screen justify-center items-start pt-10 z-50 inset-0">
                <div className="w-3/4">
                    <div className="rounded-lg shadow-lg w-full bg-white">
                        <div className="flex justify-between items-start border-b-2 border-solid border-paleMagenta p-5 font-semibold">
                            <h3 className="text-2xl font-sans">Create asset</h3>
                            <button className="bg-transparent text-2xl" onClick={onClose}> x </button>
                        </div>
                        <CreateAssetForm onCloseButton={onClose}/>
                    </div>
                </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default CreateModal;
