import React from 'react';
import Image from 'next/image';
import Contador from '../components/Contador';

const vacations = [
  { name: 'Eze', date: '2024-08-20T23:59:59', image: '/puntacana.jpg' },
  { name: 'Ari', date: '2024-08-19T23:59:59', image: '/snow.jpg' },
  { name: 'Jesi', date: '2024-08-22T23:59:59', image: '/europa.jpg' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {vacations.map((vacation, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 m-4 w-full max-w-md"
        >
          <Image
            src={vacation.image}
            alt={`Destino de ${vacation.name}`}
            width={500}
            height={300}
            className="rounded-md"
          />
          <h2 className="text-2xl font-bold mt-4">
            Faltan <Contador targetDate={vacation.date} />para las vacaciones de {vacation.name}
          </h2>
        </div>
      ))}
    </div>
  );
}
