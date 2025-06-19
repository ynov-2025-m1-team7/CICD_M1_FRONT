import "./style.css";
import * as Sentry from "@sentry/react";

const FormButton = ({ type, title, onClick, disabled=false }) => {
    const currentPath = window.location.pathname;

    if (!type || !title || !onClick) {
        Sentry.captureMessage("Type, title, and onClick are required props", {
            level: "error",
            tags: {
                route: currentPath,
            },
        });
    }

    return (
        <button 
            type={type}
            className="form-button"
            onClick={onClick}
            style={disabled ? { backgroundColor: "#ccc", cursor: "not-allowed" } : {}}
            disabled={disabled}
        >
            {disabled ? 'Chargement...' : title}
        </button>
    );
}

export default FormButton;

