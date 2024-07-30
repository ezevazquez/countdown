'use client';

import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { vacations } from '@/app/lib/vacationsData';

export default function VacationPage() {
  const router = useRouter();
  const params = useParams();
  const name = Array.isArray(params.name) ? params.name[0] : params.name;

  if (!name) {
    return <div>No se proporcionó un nombre.</div>;
  }

  const vacation = vacations.find((vac) => vac.name.toLowerCase() === name.toLowerCase());

  if (!vacation) {
    return <div>No se encontró la vacación.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <button
        onClick={() => router.push('/')}
        className="absolute top-4 left-4 px-4 py-2 bg-gray-500 text-white rounded"
      >
        Volver
      </button>
      <h1 className="text-4xl font-bold mb-8">{vacation.name}</h1>
      <Image
        src={vacation.image}
        alt={`Destino de ${vacation.name}`}
        width={600}
        height={300}
        className="rounded-md mb-4"
      />
      <p className="text-2xl mb-2">Fecha de vacaciones: {new Date(vacation.date).toLocaleDateString()}</p>
    </div>
  );
}
