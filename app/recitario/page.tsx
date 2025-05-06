"use client";

import { useState } from "react";

interface Receta {
  nombreClinica: string;
  direccion: string;
  telefono: string;
  correo?: string;
  registroSalud: string;
  cedulaMedico: string;
  nombreMedico: string;
  especialidad?: string;
  nombrePaciente: string;
  edadPaciente?: number;
  tallaPaciente?: number;
  pesoPaciente?: number;
  temperatura?: number;
  ritmoCardiaco?: number;
  medicamentos: string;
  horarios?: string;
}

export default function RecetarioPage() {
  const [recetas, setRecetas] = useState<Receta[]>([]);
  const [nuevaReceta, setNuevaReceta] = useState<Receta>({
    nombreClinica: "",
    direccion: "",
    telefono: "",
    correo: "",
    registroSalud: "",
    cedulaMedico: "",
    nombreMedico: "",
    especialidad: "",
    nombrePaciente: "",
    edadPaciente: undefined,
    tallaPaciente: undefined,
    pesoPaciente: undefined,
    temperatura: undefined,
    ritmoCardiaco: undefined,
    medicamentos: "",
    horarios: "",
  });

  const agregarReceta = () => {
    if (nuevaReceta.nombreClinica.trim() !== "" && nuevaReceta.nombrePaciente.trim() !== "") {
      setRecetas([...recetas, nuevaReceta]);
      setNuevaReceta({
        nombreClinica: "",
        direccion: "",
        telefono: "",
        correo: "",
        registroSalud: "",
        cedulaMedico: "",
        nombreMedico: "",
        especialidad: "",
        nombrePaciente: "",
        edadPaciente: undefined,
        tallaPaciente: undefined,
        pesoPaciente: undefined,
        temperatura: undefined,
        ritmoCardiaco: undefined,
        medicamentos: "",
        horarios: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-300">Recetario Médico</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Administra y genera recetas médicas de manera organizada.
          </p>
        </header>

        {/* Formulario para agregar receta */}
        <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Nueva Receta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={nuevaReceta.nombreClinica}
              onChange={(e) => setNuevaReceta({ ...nuevaReceta, nombreClinica: e.target.value })}
              placeholder="Nombre de la clínica"
              className="px-4 py-2 rounded-lg bg-blue-50 dark:bg-slate-700 text-gray-700 dark:text-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
            />
            <input
              type="text"
              value={nuevaReceta.direccion}
              onChange={(e) => setNuevaReceta({ ...nuevaReceta, direccion: e.target.value })}
              placeholder="Dirección"
              className="px-4 py-2 rounded-lg bg-blue-50 dark:bg-slate-700 text-gray-700 dark:text-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
            />
            <input
              type="text"
              value={nuevaReceta.telefono}
              onChange={(e) => setNuevaReceta({ ...nuevaReceta, telefono: e.target.value })}
              placeholder="Teléfono"
              className="px-4 py-2 rounded-lg bg-blue-50 dark:bg-slate-700 text-gray-700 dark:text-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
            />
            <input
              type="email"
              value={nuevaReceta.correo}
              onChange={(e) => setNuevaReceta({ ...nuevaReceta, correo: e.target.value })}
              placeholder="Correo electrónico (opcional)"
              className="px-4 py-2 rounded-lg bg-blue-50 dark:bg-slate-700 text-gray-700 dark:text-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
            />
            <input
              type="text"
              value={nuevaReceta.registroSalud}
              onChange={(e) => setNuevaReceta({ ...nuevaReceta, registroSalud: e.target.value })}
              placeholder="Registro de la Secretaría de Salud"
              className="px-4 py-2 rounded-lg bg-blue-50 dark:bg-slate-700 text-gray-700 dark:text-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
            />
            <input
              type="text"
              value={nuevaReceta.cedulaMedico}
              onChange={(e) => setNuevaReceta({ ...nuevaReceta, cedulaMedico: e.target.value })}
              placeholder="Cédula profesional del médico"
              className="px-4 py-2 rounded-lg bg-blue-50 dark:bg-slate-700 text-gray-700 dark:text-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
            />
            <input
              type="text"
              value={nuevaReceta.nombreMedico}
              onChange={(e) => setNuevaReceta({ ...nuevaReceta, nombreMedico: e.target.value })}
              placeholder="Nombre del médico"
              className="px-4 py-2 rounded-lg bg-blue-50 dark:bg-slate-700 text-gray-700 dark:text-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
            />
            <input
              type="text"
              value={nuevaReceta.nombrePaciente}
              onChange={(e) => setNuevaReceta({ ...nuevaReceta, nombrePaciente: e.target.value })}
              placeholder="Nombre del paciente"
              className="px-4 py-2 rounded-lg bg-blue-50 dark:bg-slate-700 text-gray-700 dark:text-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
            />
            <textarea
              value={nuevaReceta.medicamentos}
              onChange={(e) => setNuevaReceta({ ...nuevaReceta, medicamentos: e.target.value })}
              placeholder="Medicamentos recetados"
              className="col-span-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-slate-700 text-gray-700 dark:text-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
            />
          </div>
          <button
            onClick={agregarReceta}
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
          >
            Agregar Receta
          </button>
        </div>

        {/* Lista de recetas */}
        <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Recetas Generadas</h2>
          {recetas.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">No hay recetas aún. ¡Agrega una!</p>
          ) : (
            <ul className="space-y-4">
              {recetas.map((receta, index) => (
                <li
                  key={index}
                  className="bg-blue-50 dark:bg-slate-700 p-4 rounded-lg shadow"
                >
                  <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300">
                    {receta.nombrePaciente} - {receta.nombreClinica}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{receta.medicamentos}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}