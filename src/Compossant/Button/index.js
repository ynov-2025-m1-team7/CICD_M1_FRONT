import "./style.css";

const HeaderButton = ({ text, onClick }) => {
    return (
        <button className="disconect-button" onClick={onClick}>
            {text}
        </button>
    );
}

const DisconectButton = ({ onClick }) => {
    return (
        <button className="disconect-button" onClick={onClick}>
            Déconnexion
        </button>
    );
}

export {HeaderButton, DisconectButton};