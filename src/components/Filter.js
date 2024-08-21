// src/components/Filter.js
import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter spells"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
