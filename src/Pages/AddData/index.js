import Header from "../../Compossant/Header";
import IdentificationBanner from "../../Compossant/IdentificationBanner";
import JsonForm from "../../Compossant/JsonForm";
import './style.css';

const JsonFormPage = () => {
    return (
        <div className="json-form-page">
            <Header />
            <div className="json-form-container">
                <IdentificationBanner title={"Ajouter des données"} />
                <JsonForm />
            </div>
        </div>
    );
}

export default JsonFormPage;