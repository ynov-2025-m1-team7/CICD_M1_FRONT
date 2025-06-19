import React from 'react';
import "./style.css";
import * as Sentry from "@sentry/react";

const Input = ({ name, type, label, placeholder, value, onChange }) => {
    const currentPath = window.location.pathname;

    if (!name || !type || !onChange) {
        Sentry.captureMessage("Name, type, and onChange are required props", {
            level: "error",
            tags: {
                route: currentPath,
            },
        });
    }

    return (
        <div className="input-container">
            {label && <label htmlFor={name} className="label">{label}</label>}
            <input
                className="input"
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;