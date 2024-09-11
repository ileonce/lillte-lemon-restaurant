import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search your meal" 
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
