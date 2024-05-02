'use client'

const CreateReceivableButton = ({ onClose }) => {
    return (
        <>
            <button className="bg-mayaBlue w-28 p-3 rounded-full" onClick={onClose}>
                <span className="font-semibold text-lg"> Create </span>
                <i className="fa-solid fa-circle-plus"></i>
            </button>
        </>
    )
}

export default CreateReceivableButton;