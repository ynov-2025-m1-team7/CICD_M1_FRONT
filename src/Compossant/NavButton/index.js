import "./style.css";
import { useLocation } from "react-router-dom";

const NavButton = ({ text, image, imageSelected, id, redirection = "", onClick }) => {
    const path = useLocation().pathname;
    let selected = false;

    if (!text || !image || !imageSelected || !id || !onClick) {
        throw new Error("All props are required");
    }

    if (!path) {
        throw new Error("Path is required");
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