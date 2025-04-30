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
            <p className="display__text">{text}</p>
            <img className="display__icon" src="/assets/home.svg" alt="home" />
        </button>
    );
}

export default NavButton;