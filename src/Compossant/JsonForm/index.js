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
  
    if (!form.file) {
      setError("Veuillez sélectionner un fichier JSON.");
      setLoading(false);
      return;
    }
  
    try {
      const text = await form.file.text(); // Read file as text
      const json = JSON.parse(text); // Parse to JSON
  
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/feedbacks/upload`,
        json,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log(response.data);
      // navigate("/success");
    } catch (err) {
      setError("Le fichier n'est pas un JSON valide ou l'envoi a échoué.");
      throw new Error("Erreur lors de la récupération des données :", err);
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
