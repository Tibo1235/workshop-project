import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from '../../assets/images/logo.png';

function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement de la connexion ici
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      {/* Header avec logo et boutons */}
      <header className="flex justify-between items-center px-4 lg:px-6 h-14 bg-white shadow-md">
        <Link to="/" className="flex items-center">
          {/* Utilisation de la variable logo importée */}
          <img
            src={logo}
            alt="MentalCare Logo"
            className="w-10 h-10 mr-2"
          />
          <span className="font-extrabold text-xl text-blue-500">MentalCare</span>
        </Link>

        {/* Boutons Connexion et S'inscrire */}
        <div className="flex items-center space-x-4">
          <Link to="/auth">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Connexion
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              S'inscrire
            </button>
          </Link>
        </div>
      </header>

      {/* Formulaire de connexion */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center text-blue-500 mb-4">MentalCare</h1>
          <p className="text-center text-gray-700 mb-6">
            Prenez soin de votre bien-être mental au quotidien grâce à un suivi personnalisé et des outils adaptés à vos besoins.
          </p>
          
          <h2 className="text-lg font-semibold text-center mb-4">CONNEXION</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Adresse mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded"
            >
              SE CONNECTER
            </button>
          </form>

          <p className="text-center mt-4">
            Vous n'avez pas de compte ?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Créez-en un
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
