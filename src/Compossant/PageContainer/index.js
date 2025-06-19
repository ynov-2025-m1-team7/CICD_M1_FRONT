import Navbar from "../Navbar";
import "./style.css";
import * as Sentry from "@sentry/react";

const PageContainer = ({component}) => {
    const currentPath = window.location.pathname;

    if (!component) {
        Sentry.captureMessage("Le composant est requis", {
            level: "error",
            tags: {
                route: currentPath,
            },
        });
    }

    return (
        <div className="page-container">
            <Navbar />
            <div className="page-content">
                {component}
            </div>
        </div>
    );
};

export default PageContainer;
