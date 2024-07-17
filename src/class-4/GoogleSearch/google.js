import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import './google.css'; 

const GoogleSuggestions = ({ suggestionsList }) => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestionsList);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);

    const filtered = suggestionsList.filter(suggestion =>
      suggestion.suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion.suggestion);
    setFilteredSuggestions([suggestion]);
  };

  return (
    <div className='main-div'>
      <img src='https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw' alt='google' className='google-image'></img>
      <div className="suggestions-container">
        <div className='input-container'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input
            type="text"
            placeholder="Search Google..."
            value={searchInput}
            onChange={handleInputChange}
            className="search-input"
          />
        </div>
        <ul className="suggestions-list">
          {filteredSuggestions.map((suggestion) => (
            <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)} className="suggestion-item">
                {suggestion.suggestion}
              <span className="arrow" onClick={() => handleSuggestionClick(suggestion)}><FontAwesomeIcon icon={faArrowUp}/></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GoogleSuggestions;
