import "./style.css";
import NavButton from "../NavButton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <div className="navbar__links">
                <NavButton text={"Dashboard"} image={'/assets/home.svg'} imageSelected={'/assets/home_selected.svg'} id={1} redirection={"/"} onClick={() => {navigate("/")}}/>
                <NavButton text={"Feedback"} image={'/assets/bell.svg'} imageSelected={'/assets/bell.svg'} id={2} redirection={"feedback"} onClick={() => {navigate("/feedback")}}/>
                <NavButton text={"Notification"} image={'/assets/message.svg'} imageSelected={'/assets/message_selected.svg'} id={3} onClick={() => {}}/>
            </div>
        </div>
    );
}

export default Navbar;