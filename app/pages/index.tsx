"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Contador from "../components/Contador";
import { vacations } from "@/app/lib/vacationsData"; // Asegúrate de que la ruta es correcta

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVacations = vacations.filter((vacation) =>
    vacation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const now = new Date();
  const upcomingVacation = vacations
    .filter((vacation) => new Date(vacation.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Próximas Vacaciones</h1>

      <input
        type="text"
        placeholder="Buscar vacaciones..."
        className="mb-4 p-2 border border-gray-300 rounded-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {upcomingVacation && (
        <div className="mb-8 p-4 bg-blue-100 border border-blue-300 rounded-md">
          <p className="text-xl font-semibold">
            {upcomingVacation.gender === "female" ? "La próxima" : "El próximo"}{" "}
            en salir de vacaciones es {upcomingVacation.name}, el{" "}
            {new Date(upcomingVacation.date).toLocaleDateString()}.
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVacations.length > 0 ? (
          filteredVacations.map((vacation, index) => (
            <Link key={index} href={`/${vacation.name}`} passHref>
              <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center cursor-pointer">
                <div className="h-72 w-full flex items-center justify-center bg-gray-200">
                  <Image
                    src={vacation.image}
                    alt={`Destino de ${vacation.name}`}
                    width={300}
                    height={300}
                    className="object-contain h-full w-full rounded-md"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  Faltan <Contador targetDate={vacation.date} /> para las
                  vacaciones de {vacation.name}
                </h2>
              </div>
            </Link>
          ))
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
}
