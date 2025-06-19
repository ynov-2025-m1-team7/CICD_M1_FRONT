import React, { useEffect, useState } from 'react';
import axios from "axios";
import * as Sentry from "@sentry/react";


const FeedbackList = ({ feedbacks }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('asc');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const currentPath = window.location.pathname;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/feedbacks`);
                // Ensure unique items based on a unique identifier (e.g., id)
                const uniqueData = Array.from(new Set(response.data.map(item => item.id)))
                    .map(id => response.data.find(item => item.id === id));
                setData(uniqueData);
            } catch (error) {
                Sentry.captureMessage("Erreur lors de la récupération des données", {
                    level: "error",
                    tags: {
                        route: currentPath,
                    },
                });
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

    const searchContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '16px 32px 0 0',
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

    // Function to determine the appropriate smiley based on score
    const getSmileyImage = (score) => {
        if (score < 1) {
            return (
                <img
                    src="/assets/Feedback/SadSmiley.svg" // Replace with the actual path to your tear smiley SVG
                    alt="Tear Smiley"
                    style={{ width: '24px', height: '24px' }}
                />
            );
        } else if (score >= 0.5) {
            return (
                <img
                    src="/assets/Feedback/NeutralSmiley.svg" // Replace with the actual path to your happy smiley SVG
                    alt="Neutral Smiley"
                    style={{ width: '24px', height: '24px' }}
                />
            );
        }
        else
        {
            return (
                <img
                    src="/assets/Feedback/HappySmiley.svg" // Replace with the actual path to your happy smiley SVG
                    alt="Happy Smiley"
                    style={{ width: '24px', height: '24px' }}
                />
            );
        }
    };

    return (
        <div>
            <div style={searchContainerStyle}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={inputStyle}
                />
                <label htmlFor="sortOption" style={{ marginRight: '10px' }}>Sort by:</label>
                <select value={sortOption} onChange={handleSortChange} style={selectStyle}>
                    <option value="asc">Sort Ascending</option>
                    <option value="desc">Sort Descending</option>
                </select>
            </div>
            <div>
                {loading ? ( // Check if loading
                    <p>Loading...</p> // Display loading message
                ) : (
                    <ul style={{ listStyleType: 'none', padding: 0, marginRight: '32px' }}>
                        {filteredData().map(item => (
                            <li key={item.id} style={{ border: '1px solid #e0e0e0', padding: '10px', margin: '10px 0', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ marginRight: '20px' }}>
                                        {getSmileyImage(item.score)} {/* Display the appropriate smiley based on score */}
                                    </div>
                                    <div>
                                        < strong>{item.channel}</strong> {/* Display the channel (e.g., Twitter) */}
                                        <p style={{ margin: '5px 0' }}>
                                            {item.id} <span style={{ color: '#555' }}>{new Date(item.date).toLocaleString()}</span>
                                        </p> {/* Display the formatted timestamp */}
                                        <p>{item.text}</p> {/* Comment */}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FeedbackList;