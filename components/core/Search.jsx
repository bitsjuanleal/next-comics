import React from 'react';
import '../styles/search.scss';

function Search(props) {
  const {
    placeholder,
    color,
    borderColor,
    onUpdateCharacters
  } = props;
  var inputStyle = {
    borderColor: borderColor,
    color: color,
  };
  const handleChange = value => {
    onUpdateCharacters(value);
  };
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder={placeholder}
          style={inputStyle}
          onChange={e => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
