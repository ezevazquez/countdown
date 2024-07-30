// app/pages/index.tsx

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Contador from '../components/Contador';

const vacations = [
  { name: 'Eze', date: '2024-08-20T03:00:00', image: '/puntacana.jpg', gender: 'male' },
  { name: 'Ari', date: '2024-08-19T20:00:00', image: '/snow.jpg', gender: 'male' },
  { name: 'Jesi', date: '2024-08-14T23:21:00', image: '/europa.jpg', gender: 'female' },
  { name: 'Niqi', date: '2024-10-03T21:00:00', image: '/usa.jpg', gender: 'male' },
  { name: 'Juju', date: '2024-09-05T18:45:00', image: '/peru.png', gender: 'female' },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar vacaciones basado en el término de búsqueda
  const filteredVacations = vacations.filter(vacation =>
    vacation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Encontrar la próxima fecha de vacaciones
  const now = new Date();
  const upcomingVacation = vacations
    .filter(vacation => new Date(vacation.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Próximas Vacaciones</h1>
      
      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar vacaciones..."
        className="mb-4 p-2 border border-gray-300 rounded-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Próximo en salir de vacaciones */}
      {upcomingVacation && (
        <div className="mb-8 p-4 bg-blue-100 border border-blue-300 rounded-md">
          <p className="text-xl font-semibold">
            {upcomingVacation.gender === 'female' ? 'La próxima' : 'El próximo'} en salir de vacaciones es {upcomingVacation.name}, el {new Date(upcomingVacation.date).toLocaleDateString()}.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVacations.length > 0 ? (
          filteredVacations.map((vacation, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center"
            >
              <Image
                src={vacation.image}
                alt={`Destino de ${vacation.name}`}
                width={600}
                height={300}
                className="rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">
                Faltan <Contador targetDate={vacation.date} /> para las vacaciones de {vacation.name}
              </h2>
            </div>
          ))
        ) : (
          <p className="text-xl">No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
}
