import React from 'react';
import {GoSearch} from 'react-icons/go'
import './styles.css'

const Search = ({name, placeholder}) => {
    return (
        <div className="input-search">
            <GoSearch />
            <input type="search" name={name} placeholder={placeholder}/>
        </div>
    );
}

export default Search;
