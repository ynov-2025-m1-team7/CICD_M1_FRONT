import React, { useState, useEffect } from 'react';
import "./style.css";
import axios from 'axios';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('asc');
  const [data, setData] = useState([]);

  /*useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
      setData(response.data);
    };
    fetchData();
  }, []);*/

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    // Sort the data based on the selected option
    const sortedData = [...data].sort((a, b) => {
      if (sortOption === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setData(sortedData);
  };

  // Define styles
  const headerStyle = {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #dee2e6',
  };

  const searchContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const inputStyle = {
    padding: '10px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    marginRight: '10px',
    flex: '1',
  };

  const selectStyle = {
    padding: '10px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
  };

  const itemStyle = {
    padding: '10px',
    borderBottom: '1px solid #dee2e6',
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
        {/* Display filtered and sorted data */}
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
