import "./style.css";
import NavButton from "../NavButton";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <NavButton text={"Dashboard"} redirection={"/"} onClick={() => {}}/>
                <NavButton text={"Feedback"} redirection={"feedback"} onClick={() => {}}/>
                <NavButton text={"Notification"} onClick={() => {}}/>
            </div>
        </div>
    );
}

export default Navbar;