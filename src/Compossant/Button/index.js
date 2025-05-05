import "./style.css";

const HeaderButton = ({ text, onClick }) => {
    return (
        <button className="disconect-button" onClick={onClick}>
            {text}
        </button>
    );
}

export default HeaderButton;