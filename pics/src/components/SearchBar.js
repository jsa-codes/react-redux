import { useState } from 'react'
import './SearchBar.css'


export const SearchBar = ({ onSubmit }) => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(searchTerm)
    }

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }


    return <div className='search-bar'>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="">Enter search term</label>
            <input value={searchTerm} onChange={handleChange}/>
        </form>
    </div>
}