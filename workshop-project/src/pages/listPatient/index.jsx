import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';

function ListPatient() {
  const patients = [
    { id: 1, firstName: "Jean", lastName: "Dupont" },
    { id: 2, firstName: "Marie", lastName: "Curie" },
    { id: 3, firstName: "Pierre", lastName: "Durand" },
    { id: 4, firstName: "Sophie", lastName: "Martin" },
    { id: 5, firstName: "Luc", lastName: "Leroy" },
  ];

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

      {/* Contenu de la page */}
      <main className="flex flex-1 justify-center items-center mt-6">
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-3xl">
          <h1 className="text-2xl font-bold text-blue-500 underline mb-4">
            Liste de vos patients
          </h1>
          <div className="space-y-4">
            {patients.map((patient) => (
              <div key={patient.id} className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">
                  {patient.firstName} {patient.lastName}
                </span>
                <Link to={`/questionnaire/${patient.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Regarder le questionnaire
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ListPatient;
