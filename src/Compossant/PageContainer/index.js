import Navbar from "../Navbar";
import "./style.css";

const PageContainer = ({component}) => {
    if (!component) {
        throw new Error("Le composant est requis");
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
