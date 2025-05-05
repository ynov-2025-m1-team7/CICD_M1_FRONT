import React, { useState } from 'react';
import IdentificationBanner from '../../Compossant/IdentificationBanner';
import InscriptionForm from '../../Compossant/InscriptionForm';
import './style.css';

const Inscription = () => {
    return (
        <div className="signin-container">
            <InscriptionForm/>
            <IdentificationBanner title={"Bienvenue"} />
            
        </div>
    );
};

export default Inscription;