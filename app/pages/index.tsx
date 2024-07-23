import React from 'react';
import Image from 'next/image';
import Contador from '../components/Contador';

const vacations = [
  { name: 'Eze', date: '2024-08-20T03:00:00', image: '/puntacana.jpg' },
  { name: 'Ari', date: '2024-08-19T20:00:00', image: '/snow.jpg' },
  { name: 'Jesi', date: '2024-08-14T23:21:25', image: '/europa.jpg' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Próximas Vacaciones</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vacations.map((vacation, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center"
          >
            <Image
              src={vacation.image}
              alt={`Destino de ${vacation.name}`}
              width={500}
              height={300}
              className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">
              Faltan <Contador targetDate={vacation.date} /> para las vacaciones de {vacation.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
