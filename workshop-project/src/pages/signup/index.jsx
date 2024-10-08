import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function AuthPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
        if (!validatePassword(password)) {
            setError('Le mot de passe doit contenir au moins 8 caractères, 4 majuscules, 4 minuscules, 2 chiffres et 2 caractères spéciaux.');
        } else {
            setError('');
            // Traitement de la connexion ici
            // navigate("/dashboard"); // Décommenter et changer vers la page cible après connexion réussie
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="flex justify-between items-center px-4 lg:px-6 h-14 border-b">
                <Link to="/" className="flex items-center">
                    <span className="font-extrabold text-xl">MentalCare</span>
                </Link>
                <div className="flex items-center space-x-4"> {/* Ajout d'une div pour les boutons */}
                    <Link to="/auth" className="flex items-left">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Connexion
                        </button>
                    </Link>
                    <Link to="/signup" className="flex items-left">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            S'inscrire
                        </button>
                    </Link>
                </div>
            </header>
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-md px-4 py-8">
                    <h1 className="text-2xl font-bold text-center mb-4">S'inscrire</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Adresse Mail :</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded" 
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium mb-2">Mot de Passe :</label>
                            <input 
                                type="password" 
                                id="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded" 
                            />
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                S'inscrire
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
