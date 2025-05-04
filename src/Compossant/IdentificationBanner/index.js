import "./style.css";

const IdentificationBanner = ({title}) => {
    return (
        <div className="identification-banner">
            <p className="identification-banner__title">{title}</p>
        </div>
    );
}

export default IdentificationBanner;