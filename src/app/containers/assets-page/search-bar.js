'use client'

const SearchBar = ({ handleChange }) => {
    return (
        <input type="text" className="border-2 outline-none focus:border-atomicPink 
        rounded-full p-3 w-80 shadow-lg" onChange={(e) => handleChange(e.target.value)} placeholder="Search"></input>
    )
}

export default SearchBar;