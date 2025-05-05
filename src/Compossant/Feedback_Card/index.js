import React from 'react';

const FeedbackList = ({ feedbacks }) => {
    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {feedbacks.map((feedback) => (
                <li key={feedback.id} style={{ border: '1px solid #e0e0e0', padding: '10px', margin: '10px 0', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: '10px' }}>
                            {/* Ajout d'un smiley (emoji) */}
                            <span role="img" aria-label="smiley">😊</span>
                        </div>
                        <div>
                            <strong>{feedback.username}</strong> {/* Affichage du nom d'utilisateur */}
                            <p style={{ margin: '5px 0', color: '#999' }}>{feedback.timestamp}</p> {/* Affichage du timestamp */}
                            <p>{feedback.comment}</p> {/* Commentaire */}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default FeedbackList;