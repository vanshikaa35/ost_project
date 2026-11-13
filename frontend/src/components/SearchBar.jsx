/**
 * SearchBar.jsx
 * A controlled input component for searching recipes by ingredient.
 * Accepts the current query and an onChange handler from the parent.
 */

import React from "react";

const SearchBar = ({ query, onChange }) => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <span className="search-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          id="recipe-search-input"
          type="text"
          className="search-input"
          placeholder='Search by ingredient (e.g. "paneer", "rice", "tomato")…'
          value={query}
          onChange={(e) => onChange(e.target.value)}
          autoComplete="off"
          aria-label="Search recipes by ingredient"
        />
        {query && (
          <button
            className="clear-btn"
            onClick={() => onChange("")}
            aria-label="Clear search"
            title="Clear"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
