import React, { useState } from 'react';

const SearchBox = ({searchChange}) => {

    const [searchfield, setSearchfield]= useState("");
    const handleChange = (event) => {
        setSearchfield(event.target.value)
    }
    const handleClick = () => {
        searchChange(searchfield)
    }
    return (
        <div>
            <input
            type="search"
            value={searchfield}
            placeholder="search dog..."
            onChange={handleChange}
            />
          <button onClick={handleClick}>Submit</button>  
        </div>
    )
}
export default SearchBox;