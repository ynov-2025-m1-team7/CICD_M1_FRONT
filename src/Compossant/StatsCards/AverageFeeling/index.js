import "./style.css";
import { useState, useEffect } from "react";
import * as Sentry from "@sentry/react";

const AvarageFeeling = ({value}) => {
    const currentPath = window.location.pathname;
    
    const [data, setData] = useState({
        icon :"/assets/Feedback/NeutralSmiley.svg",
        label : "Neutre"
    });

    if (!value) {
        Sentry.captureMessage("La valeur moyenne du sentiment est requise", {
            level: "error",
            tags: {
                route: currentPath,
            },
        });
    }

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