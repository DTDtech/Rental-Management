'use client'

const FilterAssetsDropdown = () => {
    return (
        <>
            <select name="filter" defaultValue="" className="bg-mayaBlue w-28 p-3 rounded-lg text-center 
            font-medium text-base shadow-lg">
                <option hidden value="">Filter</option>
                <option value="byClosestDate">Closest Date</option>
                <option value="byOldestDate">Oldest Date</option>
            </select>
        </>
    )
}

export default FilterAssetsDropdown;