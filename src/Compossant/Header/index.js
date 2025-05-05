import "./style.css";
import {HeaderButton, DisconectButton} from "../Button";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie"; // Assure-toi d’avoir installé js-cookie

const Header = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  return (
    <header>
      <h1 className="WebsiteName" onClick={()=>{navigate('/')}}>Feelin'It</h1>
      {path === "/feedback" ? (
        <div className="header__buttons">
          <HeaderButton
            text="Ajouter un feedback"
            onClick={() => {
              navigate("/add-data");
            }}
          />
        </div>
      ) 
    :
    (
      <div className="header__buttons">
        <DisconectButton
          onClick={() => {
            Cookies.remove("jwt_token", { path: "/" })
            navigate("/signin");
          }}
        />
      </div>
      )}
    </header>
  );
};

export default Header;
