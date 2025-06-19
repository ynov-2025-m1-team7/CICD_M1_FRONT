import "./style.css";
import { useLocation } from "react-router-dom";
import * as Sentry from "@sentry/react";

const NavButton = ({ text, image, imageSelected, id, redirection = "", onClick }) => {
    const path = useLocation().pathname;
    let selected = false;
    const currentPath = window.location.pathname;

    if (!text || !image || !imageSelected || !id || !onClick) {
        Sentry.captureMessage("All props are required", {
            level: "error",
            tags: {
                route: currentPath,
            },
        });
    }

    if (!path) {
        Sentry.captureMessage("Path is required", {
            level: "error",
            tags: {
                route: currentPath,
            },
        });
    }

    if (path === redirection && redirection !== "") {
        selected = true;
    }

    return (
        <button
            className={`nav-button-${id}-${selected ? "selected" : "unselected"}`}
            onClick={onClick}
        >
            <p className="display__text">{text}</p>
            <img className="display__icon" src={selected ? imageSelected : image} alt={text} />
        </button>
    );
}

export default NavButton;