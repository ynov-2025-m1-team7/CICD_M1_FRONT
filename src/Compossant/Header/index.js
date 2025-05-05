import React, { useState, useEffect } from 'react';
import "./style.css";
import axios from 'axios';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('asc');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/feedbacks`);
        // Ensure unique items based on a unique identifier (e.g., id)
        const uniqueData = Array.from(new Set(response.data.map(item => item.id)))
            .map(id => response.data.find(item => item.id === id));
        setData(uniqueData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedData = (items) => {
    return [...items].sort((a, b) => {
      const textA = a.text || '';
      const textB = b.text || '';

      return sortOption === 'asc' ? textA.localeCompare(textB) : textB.localeCompare(textA);
    });
  };

  const filteredData = () => {
    return sortedData(data).filter(item =>
        item.text && item.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

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
        {/*  <div style={searchContainerStyle}>
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
        <div>
          {loading ? ( // Check if loading
              <p>Loading...</p> // Display loading message
          ) : (
              filteredData().map(item => (
                  <div key={item.id} style={itemStyle}>
                    <p>{item.text}</p>
                    <p>{item.date}</p>
                  </div>
              ))
          )}
        </div> */}
      </header>
  );
};

export default Header;
