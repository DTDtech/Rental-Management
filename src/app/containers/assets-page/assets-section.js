'use client'

import CreateAssetButton from "@/app/containers/assets-page/create-button"
import SearchBar from "@/app/containers/assets-page/search-bar"
import FilterAssetsDropdown from "./filter-dropdown"
import CreateModal from "./create-modal"
import EditModal from "./edit-modal"
import DeleteAsset from "@/app/actions/Assets/deleteAsset"
import { useState } from "react"

const AssetsSection = ({ assets }) => {

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [editModalData, setEditModalData] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    const [searchValue, setSearchValue] = useState("");

    const searchFilter = () => {
        return assets.filter(
            asset => asset.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }

    const filteredAssets = searchFilter();

    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "VND",
    });

    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <CreateAssetButton onClose={() => {
                        setShowCreateModal(true);
                    }
                    } />
                </div>
                <div>
                    <SearchBar handleChange={setSearchValue}></SearchBar>
                </div>
                <div>
                    <FilterAssetsDropdown />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex overflow-x-auto mt-5 rounded-lg shadow-xl w-full">
                    <table className="table-auto text-black bg-white text-center w-full">
                        <thead className="bg-lavenderFloral text-white uppercase">
                            <tr className="">
                                <th scope="col" className="px-2 py-4">Name</th>
                                <th scope="col" className="px-2 py-4">Type</th>                                
                                <th scope="col" className="px-2 py-4">In stock</th>
                                <th scope="col" className="px-2 py-4">Description</th>
                                <th scope="col" className="px-2 py-4">Price per hour</th>
                                <th scope="col" className="px-2 py-4">Price per day</th>
                                <th scope="col" className="px-2 py-4">Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody className="bg-slateBlue text-white">
                            {filteredAssets.map((filteredAsset) => (
                                <tr key={filteredAsset._id}>
                                    <td className="px-2 py-4">{filteredAsset.name}</td>
                                    <td className="px-2 py-4">{filteredAsset.type}</td>
                                    <td className="px-2 py-4">{filteredAsset.in_stock}</td>
                                    <td className="px-2 py-4">{filteredAsset.description}</td>
                                    <td className="px-2 py-4">{filteredAsset.price_per_hour ? currencyFormatter.format(filteredAsset.price_per_hour) : null}</td>
                                    <td className="px-2 py-4">{filteredAsset.price_per_day ? currencyFormatter.format(filteredAsset.price_per_day) : null}</td>
                                    <td className="px-2 py-4">
                                        <button onClick={() => {
                                            setEditModalData(filteredAsset);
                                            setShowEditModal(true);
                                        }
                                        }>
                                            <i className="fa-regular fa-pen-to-square mr-3"></i>
                                        </button>
                                        <button onClick={() => DeleteAsset(filteredAsset._id)}>
                                            <i className="fa-regular fa-trash-can"></i>
                                        </button>
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

export default AssetsSection;

