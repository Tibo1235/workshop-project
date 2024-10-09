import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';

function DailyForm() {
  const [feeling, setFeeling] = useState(""); // État pour l'émotion choisie

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement de la soumission du formulaire ici
    console.log("Emotion sélectionnée:", feeling);
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
          <span className="mr-2 font-semibold text-black">Utilisateur</span>
          {/*<img
            src={profileIcon}
            alt="Profile Icon"
            className="w-10 h-10 rounded-full"
  />*/}
        </div>
      </header>

      {/* Formulaire journalier */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center text-blue-500 mb-4">
            Formulaire Journalier
          </h1>
          <p className="text-center text-gray-700 mb-6">
            Comment vous sentez-vous aujourd'hui ? Veuillez sélectionner l'émotion qui reflète votre état actuel.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Première question avec des émojis */}
            <div className="mb-6">
              <p className="font-semibold mb-4 text-center">
                Comment vous sentez-vous aujourd'hui ?
              </p>
              <div className="flex justify-center space-x-4"> {/* Espacement horizontal entre les émojis */}
                {[
                  { emoji: "😃", label: "Très bien" },
                  { emoji: "🙂", label: "Bien" },
                  { emoji: "😐", label: "Moyen" },
                  { emoji: "🙁", label: "Mal" },
                  { emoji: "😢", label: "Très mal" },
                ].map((option, index) => (
                  <label key={index} className="flex flex-col items-center">
                    <input
                      type="radio"
                      name="feeling"
                      value={option.label}
                      onChange={(e) => setFeeling(e.target.value)}
                      className="hidden" // Cache la radio, on ne montre que l'émoji
                    />
                    <span
                      className={`text-3xl cursor-pointer ${
                        feeling === option.label ? "ring-2 ring-blue-500 rounded-full" : ""
                      }`}
                    >
                      {option.emoji}
                    </span>
                    <span className="text-xs mt-2">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="font-semibold mb-2">
                Avez-vous ressenti du stress ou de l'anxiété aujourd'hui ?
              </p>
              <div className="flex justify-center space-x-10">
                {["Jamais", "Rarement", "Parfois", "Souvent", "Très\n souvent"].map((label, index) => (
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

            <div className="mb-6">
              <p className="font-semibold mb-2">
                Votre niveau de d'&eacute;nergie mentale est-il suffisant pour accomplir vos tâche quotidienne ?
              </p>
              <div className="flex justify-between">
                {["Insuffisant", "Suffisant"].map((label, index) => (
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

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded"
            >
              Soumettre
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DailyForm;
