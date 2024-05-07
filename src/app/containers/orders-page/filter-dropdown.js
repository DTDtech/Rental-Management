'use client'

const FilterOrdersDropdown = ({ onSelectFilter }) => {
    return (
        <>
            <select name="filter" defaultValue="" className="bg-mayaBlue w-32 p-3 rounded-lg text-center 
            font-medium text-base shadow-lg"
            onChange={(e) => onSelectFilter(e.target.value)}>
                <option hidden value="">Filter</option>
                <option value="byClosestDate">Closest Date</option>
                <option value="byFurthestDate">Furthest Date</option>
            </select>
        </>
    )
}

export default FilterOrdersDropdown;