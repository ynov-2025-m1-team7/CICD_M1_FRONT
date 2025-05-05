import React, {useEffect, useState} from 'react';
import axios from "axios";

const FeedbackList = ({ feedbacks }) => {
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
    <div>
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
        <div>
            {loading ? ( // Check if loading
                <p>Loading...</p> // Display loading message
            ) : (
                <ul style={{ listStyleType: 'none', padding: 0, marginRight: '20px' }}>
                    {filteredData().map(item => (
                        <li key={item.id} style={{ border: '1px solid #e0e0e0', padding: '10px', margin: '10px 0', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ marginRight: '20px' }}>
                                    {/* Ajout d'un smiley (emoji) */}
                                    <span role="img" aria-label="smiley">😊</span>
                                </div>
                                <div>
                                    <strong>{item.channel}</strong> {/* Affichage du canal (ex: twitter) */}
                                    <p style={{ margin: '5px 0' }}>
                                        {item.id} <span style={{ color: '#999' }}>{new Date(item.date).toLocaleString()}</span>
                                    </p> {/* Affichage du timestamp formaté */}
                                    <p>{item.text}</p> {/* Commentaire */}
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
