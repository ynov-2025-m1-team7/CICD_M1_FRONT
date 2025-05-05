import IdentificationBanner from "../../Compossant/IdentificationBanner";
import JsonForm from "../../Compossant/JsonForm";
import './style.css';

const JsonFormPage = () => {
    return (
        <div className="json-form-container">
            <IdentificationBanner title={"Ajouter des données"} />
            <JsonForm />
        </div>
    );
}

export default JsonFormPage;