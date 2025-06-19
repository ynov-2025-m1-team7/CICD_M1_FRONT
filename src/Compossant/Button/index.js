import "./style.css";
import * as Sentry from "@sentry/react";

const HeaderButton = ({ text, onClick }) => {
    const currentPath = window.location.pathname;

    if (!text || !onClick) {
        Sentry.captureMessage("Text and onClick are required props", {
            level: "error",
            tags: {
                route: currentPath,
            },
        });
    }

    return (
        <button className="header-button" onClick={onClick}>
            {text}
        </button>
    );
}

const DisconectButton = ({ onClick }) => {
    if (!onClick) {
        Sentry.captureMessage("onClick is a required prop", {
            level: "error",
            tags: {
                route: "/",
            },
        });
    }

    return (
        <button className="disconect-button" onClick={onClick}>
            Déconnexion
        </button>
    );
}

export {HeaderButton, DisconectButton};