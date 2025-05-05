import React, { useState } from 'react';
import axios from 'axios';
import Input from "../Input";
import FormButton from "../FormButton";
import { useNavigate } from 'react-router-dom';
import "./style.css";

const JsonForm = () => {
  const [form, setForm] = useState({ file: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", form.file);

    try {
        console.log(`${process.env.REACT_APP_API_URL}/feedbacks/upload`);
        
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/feedbacks/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response.data);
      // navigate("/success"); // Optionnel
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue lors de l'envoi du fichier. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setForm({ ...form, file: e.target.files[0] });
    }
  };

  return (
    <form className="json-form" onSubmit={handleSubmit}>
      <h2 className="json-form__title">Ajoutez un fichier JSON</h2>
      <Input
        type="file"
        name="file"
        accept=".json"
        onChange={handleChange}
      />
      {error && <p className="error">{error}</p>}
      <FormButton
        type="submit"
        className="form-button"
        disabled={loading}
        title={loading ? "Envoi..." : "Ajouter"}
      />
    </form>
  );
};

export default JsonForm;
