import React, { useState } from 'react';
import axios from 'axios';
import Input from "../Input";
import FormButton from "../FormButton";
import { useNavigate } from 'react-router-dom';
import * as Sentry from "@sentry/react";
import "./style.css";

const JsonForm = () => {
  const [form, setForm] = useState({ file: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

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
      const text = await form.file.text();
      const json = JSON.parse(text);

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/feedbacks/upload`,
        json,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      Sentry.captureMessage("Fichier JSON envoyé avec succès", "info");

    } catch (err) {
      Sentry.captureException(err);
      setError("Le fichier n'est pas un JSON valide ou l'envoi a échoué.");
      setForm({ file: null });
      navigate('/feedback');
      Sentry.captureMessage("Erreur lors de la récupération des données", {
          level: "error",
          tags: {
              route: currentPath,
          },
      });
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
        label={"Choisir un fichier JSON"}
        onChange={handleChange}
      />
      {error && <p className="error">{error}</p>}
      <FormButton
        type="submit"
        className="form-button"
        disabled={loading}
        title={loading ? "Envoi..." : "Ajouter"}
        onClick={handleSubmit}
      />
    </form>
  );
};

export default JsonForm;
