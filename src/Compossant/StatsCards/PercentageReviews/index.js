import "./style.css";
import { useState } from "react";

const PercentageReviews = () => {
    const [percentage, setPercentage] = useState(80); // Example percentage value, you can change it as needed
    const [color, setColor] = useState("green"); // Example color value, you can change it as needed
    return (
        <div className="PercentageReviewsContainer">
            <h2>% Critique</h2>
            <p className={`PercentageReviewsText-${color}`}>{percentage}%</p>
        </div>
    );
}

export default PercentageReviews;