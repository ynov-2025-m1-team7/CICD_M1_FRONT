import Navbar from "../Navbar";
import "./style.css";

const PageContainer = ({component}) => {
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
