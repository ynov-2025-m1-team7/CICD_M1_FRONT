import "./style.css";
import { useLocation } from "react-router-dom";

const NavButton = ({ text, redirection = "", onClick }) => {
    const path = useLocation().pathname;
    let selected = false;

    if (path === redirection && redirection !== "") {
        selected = true;
    }
    return (
        <button
            className={`nav-button-${selected ? "selected" : "unselected"}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default NavButton;