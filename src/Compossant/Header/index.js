import React, { useState, useEffect } from 'react';
import "./style.css";
import axios from 'axios';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('asc');
  const [data, setData] = useState([]);

  /*useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/data`);
      setData(response.data);
    };
    fetchData();
  }, []);*/
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    // Ajoutez ici la logique de tri selon `sortOption`
  };

  return (
    <header style={headerStyle}>
      <div style={searchContainerStyle}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          style={inputStyle}
        />
        <select value={sortOption} onChange={handleSortChange} style={selectStyle}>
          <option value="asc">Sort Ascending</option>
          <option value="desc">Sort Descending</option>
        </select>
      </div>
      {/* Affichage des données après filtre et tri */}
      <div>
        {data
          .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(item => (
            <div key={item.id} style={itemStyle}>
              <p>{item.name}</p>
              <p>{item.date}</p>
            </div>
          ))}
      </div>
    </header>
  );
};



export default Header;