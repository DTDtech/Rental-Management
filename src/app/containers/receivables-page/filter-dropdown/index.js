'use client'

const FilterReceivablesDropdown = ({ onSelectFilter }) => {
    return (
        <>
            <select name="filter" defaultValue="" className="bg-mayaBlue w-32 p-2 rounded-lg text-center font-medium text-base
            focus:border-4 border-blue-500"
                onChange={(e) => onSelectFilter(e.target.value)}>
                <option hidden value="">Filter</option>
                <option value="byClosestDate">Closest Date</option>
                <option value="byOldestDate">Oldest Date</option>
            </select>
        </>
    )
}

export default FilterReceivablesDropdown;