import "./style.css";
import { useState, useEffect } from "react";

const AvarageFeeling = ({value}) => {
    const [data, setData] = useState({
        icon :"/assets/Feedback/NeutralSmiley.svg",
        label : "Neutre"
    });
    
    useEffect(() => {
        if (value < 0.4) {
            setData({
                icon: "/assets/Feedback/SadSmiley.svg",
                label: "Mauvais"
            });
        } else if (value > 0.6) {
            setData({
                icon: "/assets/Feedback/HappySmiley.svg",
                label: "Bon"
            });
        } else {
            setData({
                icon: "/assets/Feedback/NeutralSmiley.svg",
                label: "Neutre"
            });
        }
    }, [value]);


    return (
        <div className="AvarageFeelingContainer">
            <h2>Moyenne Sentiment</h2>
            <div className="FeelingsContainer">
                <img src={data.icon} alt="feeling" className="FeelingIcon" />
                <p className="FeelingText">{data.label}</p>
            </div>
        </div>
    );
}

export default AvarageFeeling;