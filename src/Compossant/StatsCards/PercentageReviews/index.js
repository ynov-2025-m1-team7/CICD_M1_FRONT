import "./style.css";
import { useEffect, useState } from "react";

const PercentageReviews = ({ value }) => {
    const [color, setColor] = useState("green");

    useEffect(() => {
        if (value < 30) {
            setColor("red");
        } else if (value > 70) {
            setColor("green");
        } else {
            setColor("orange");
        }
    }, [value]); // Met à jour la couleur uniquement quand `value` change

    return (
        <div className="PercentageReviewsContainer">
            <h2>% Critique</h2>
            <p className={`PercentageReviewsText-${color}`}>
                {value}%
            </p>
        </div>
    );
};

export default PercentageReviews;
