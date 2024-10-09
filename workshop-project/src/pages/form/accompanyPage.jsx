import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from '../../assets/images/logo.png'; // Import du logo
//import profileIcon from '../assets/images/profile_icon.png'; // Import de l'icône de profil

function AccompanyPage() {
  const [evaluation, setEvaluation] = useState("");
  const [stress, setStress] = useState("");
  const [relaxation, setRelaxation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement du formulaire ici
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      {/* Header avec logo et nom utilisateur */}
      <header className="flex justify-between items-center px-4 lg:px-6 h-14 bg-white shadow-md">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="MentalCare Logo"
            className="w-10 h-10 mr-2"
          />
          <span className="font-extrabold text-xl text-blue-500">MentalCare</span>
        </Link>

        <div className="flex items-center">
          <span className="mr-2 font-semibold text-black">AGNES DUPONT</span>
          <img
            src={profileIcon}
            alt="Profile Icon"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      {/* Contenu du formulaire */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center text-blue-500 mb-6">
            FORMULAIRE ACCOMPAGNATEUR
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Première question */}
            <div className="mb-6">
              <p className="font-semibold mb-2">
                Comment évaluez-vous votre capacité à soutenir votre proche aujourd'hui ?
              </p>
              <div className="flex justify-between">
                {["Très bien", "Bien", "Modérément", "Faiblement", "Pas du tout"].map((label, index) => (
                  <label key={index} className="flex flex-col items-center">
                    <input
                      type="radio"
                      name="evaluation"
                      value={label}
                      onChange={(e) => setEvaluation(e.target.value)}
                      className="mb-1"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Deuxième question */}
            <div className="mb-6">
              <p className="font-semibold mb-2">
                Avez-vous ressenti du stress ou de l'anxiété en lien avec votre rôle d'accompagnateur aujourd'hui ?
              </p>
              <div className="flex justify-between">
                {["Jamais", "Rarement", "Parfois", "Souvent", "Très souvent"].map((label, index) => (
                  <label key={index} className="flex flex-col items-center">
                    <input
                      type="radio"
                      name="stress"
                      value={label}
                      onChange={(e) => setStress(e.target.value)}
                      className="mb-1"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Troisième question */}
            <div className="mb-6">
              <p className="font-semibold mb-2">
                Avez-vous pris du temps pour vous aujourd'hui afin de vous détendre ou vous ressourcer ?
              </p>
              <div className="flex justify-between">
                {["Oui", "Non"].map((label, index) => (
                  <label key={index} className="flex flex-col items-center">
                    <input
                      type="radio"
                      name="relaxation"
                      value={label}
                      onChange={(e) => setRelaxation(e.target.value)}
                      className="mb-1"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Bouton de soumission */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Soumettre
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccompanyPage;
