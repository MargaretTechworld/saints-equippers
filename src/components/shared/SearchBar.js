import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import '../../styles/searchbar.css'; // Import your CSS file

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        onKeyDown={handleSearch}
        className="search-input"
      />
    </div>
  );
};

// Define prop types
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // Validate onSearch as a required function
};

export default SearchBar;
