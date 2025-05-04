import "./style.css";

const FormButton = ({ type, title, onClick, disabled=false }) => {
    return (
        <button 
            type={type}
            className="form-button"
            onClick={onClick}
            style={disabled ? { backgroundColor: "#ccc", cursor: "not-allowed" } : {}}
            disabled={disabled}
        >
            {disabled ? 'Chargement...' : title}
        </button>
    );
}

export default FormButton;

