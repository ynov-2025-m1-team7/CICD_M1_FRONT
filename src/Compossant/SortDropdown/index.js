import React from 'react';

const SortDropdown = ({ sortOption, setSortOption }) => {
    return (
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="date">Date</option>
            <option value="rating">Évaluation</option>
        </select>
    );
};

export default SortDropdown;