import "./style.css";

const HeaderButton = ({ text, onClick }) => {
    if (!text || !onClick) {
        throw new Error("Text and onClick are required props");
    }

    return (
        <button className="header-button" onClick={onClick}>
            {text}
        </button>
    );
}

const DisconectButton = ({ onClick }) => {
    if (!onClick) {
        throw new Error("onClick is a required prop");
    }

    return (
        <button className="disconect-button" onClick={onClick}>
            Déconnexion
        </button>
    );
}

export {HeaderButton, DisconectButton};