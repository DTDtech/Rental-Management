'use client'

const CreateOrderButton = ({ onClose }) => {
    return (
        <>
            <button className="bg-mayaBlue w-28 pl-4 py-4 rounded-full shadow-lg" onClick={onClose}>
                <div className="flex items-center">
                    <span className="font-medium text-lg mr-2"> Create </span>
                    <i className="fa-solid fa-plus"></i>
                </div>
            </button>
        </>
    )
}

export default CreateOrderButton;