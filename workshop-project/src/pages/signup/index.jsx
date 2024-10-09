import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from '../../assets/images/logo.png';

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Docteur");
  const [error, setError] = useState("");

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/g;
    const hasLowerCase = /[a-z]/g;
    const hasNumbers = /[0-9]/g;
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/g;

    const upperCaseCount = (password.match(hasUpperCase) || []).length;
    const lowerCaseCount = (password.match(hasLowerCase) || []).length;
    const numberCount = (password.match(hasNumbers) || []).length;
    const specialCharCount = (password.match(hasSpecialChars) || []).length;

    return (
      password.length >= 8 &&
      upperCaseCount >= 4 &&
      lowerCaseCount >= 4 &&
      numberCount >= 2 &&
      specialCharCount >= 2
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
    } else if (!validatePassword(password)) {
      setError(
        "Le mot de passe doit contenir au moins 8 caractères, 4 majuscules, 4 minuscules, 2 chiffres et 2 caractères spéciaux."
      );
    } else {
      setError("");
      // Traitement de la connexion ici
    }
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
      
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-md">
          <h1 className="text-lg font-semibold text-center mb-4">INSCRIPTION</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Entrez votre adresse mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Veuillez saisir un mot de passe..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirmez votre mot de passe..."
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2">Je suis un/une...</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none">
                <option value="Docteur">Docteur</option>
                <option value="Patient">Accompagnateur</option>
                <option value="Patient">Patient</option>
              </select>
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded"
            >
              S'INSCRIRE
            </button>
          </form>

          <p className="text-center mt-4">
            Vous avez déjà un compte ?{" "}
            <Link to="/auth" className="text-blue-500 hover:underline">
              Connectez-vous
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
