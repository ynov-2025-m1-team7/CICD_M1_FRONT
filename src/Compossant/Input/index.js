import React from 'react';
import "./style.css";

const Input = ({ name, type, label, placeholder, value, onChange }) => {
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