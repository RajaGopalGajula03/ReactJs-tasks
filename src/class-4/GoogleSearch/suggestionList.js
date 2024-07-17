import React from 'react';
import GoogleSuggestions from './google';
import './google.css'; 

const GoogleSuggestion = () => {
  const suggestionsList = [
    { id: 1, suggestion: "Price of Ethereum" },
    { id: 2, suggestion: "Oculus Quest 2 specs" },
    { id: 3, suggestion: "Tesla Share Price" },
    { id: 4, suggestion: "Price of Ethereum today" },
    { id: 5, suggestion: "Latest trends in AI" },
    { id: 6, suggestion: "Latest trends in ML" }
  ];

  return (
    <div className="App">
      <GoogleSuggestions suggestionsList={suggestionsList} />
    </div>
  );
}

export default GoogleSuggestion;
