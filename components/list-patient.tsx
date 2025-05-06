"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PatientRecord from "@/components/patient-record"
import DashboardLayout from "@/components/dashboard-layout"
import { UserPlus, Search, Users, UserCheck, FileText, ClipboardList } from "lucide-react"
import { useState, useEffect } from "react";
import axios from 'axios';



export default function PatientList(){
    
    const [search, setSearch] = useState("");
    const [nombre, setNombre] = useState("");
    const [pacienteId, setPacienteId] = useState(null);
    const [error, setError] = useState(""); 
    const [datosPaciente, setDatos] =useState({
        nombrePaciente: "",
        Fecha_nacimiento: "",
        gender: "",
        occupation: "",
        phone: "",
        email: "",
        address: "",
        emergencyContact: "",
        TipoSangre: "",
    });

    const buscarPaciente = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/historiales/paciente/${nombre}`);

            setDatos({...datosPaciente, nombrePaciente:res.data.datosPaciente.nombrePaciente,
                Fecha_nacimiento:res.data.datosPaciente.Fecha_nacimiento,
                gender: res.data.datosPaciente.gender
                })
    
            console.log(res.data.datosPaciente);
            setError("");
        
        } catch (err) {
            if (err instanceof Error) {
              console.error(err.message);
            }
          }
      };

    //   const ObtenerDatosPaciente = async (nombre:string) => {
    //     try {
    //       const res = await axios.get(`http://localhost:3001/historiales/paciente/${nombre}`);
    //     //   setDatos(res.data.resumen.datosPaciente); /paciente/:nombrePaciente
    //       setDatos({...datosPaciente, nombrePaciente:res.data.resumen.datosPaciente.nombre,
    //         Fecha_nacimiento:res.data.resumen.datosPaciente.fechaNacimiento,
    //         gender: res.data.resumen.datosPaciente.sexo
    //         })

    //       console.log(res.data.resumen.datosPaciente);
    //     } catch (err) {
    //       if (err instanceof Error) {
    //         console.error(err.message);
    //       }
    //     }
    //   };

    

    return(
        <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                    type="text"
                    placeholder="Nombre del paciente"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <div>

                    <button
                        onClick={buscarPaciente}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Buscar
                    </button>

                    {/* {pacienteId && (
                        <p className="text-green-600">ID del paciente: {pacienteId}</p>
                    )} */}
                    {error && <p className="text-red-600">{error}</p>}

                </div>
                
            </div>

            <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                <tr className="bg-gray-50 dark:bg-gray-800 text-left">
                    <th className="p-3 border-b border-gray-200 dark:border-gray-700">ID</th>
                    <th className="p-3 border-b border-gray-200 dark:border-gray-700">Nombre</th>
                    <th className="p-3 border-b border-gray-200 dark:border-gray-700">Edad</th>
                    <th className="p-3 border-b border-gray-200 dark:border-gray-700">Teléfono</th>
                    <th className="p-3 border-b border-gray-200 dark:border-gray-700">Última Visita</th>
                    <th className="p-3 border-b border-gray-200 dark:border-gray-700">Acciones</th>
                </tr>
                </thead>
                <tbody>
                {/* {[1, 2, 3, 4, 5].map((i) => ( */}
                    <tr  className="hover:bg-gray-50 dark:hover:bg-gray-900">
                    <td className="p-3 border-b border-gray-200 dark:border-gray-700"> {pacienteId} </td>
                    <td className="p-3 border-b border-gray-200 dark:border-gray-700">{datosPaciente.nombrePaciente}</td>
                    <td className="p-3 border-b border-gray-200 dark:border-gray-700">{datosPaciente.Fecha_nacimiento}</td>
                    <td className="p-3 border-b border-gray-200 dark:border-gray-700">{datosPaciente.gender}</td>
                    <td className="p-3 border-b border-gray-200 dark:border-gray-700">
                        
                    </td>
                    <td className="p-3 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex space-x-2">
                        <button className="p-1 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300">
                            <FileText size={16} />
                        </button>
                        <button className="p-1 text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300">
                            <ClipboardList size={16} />
                        </button>
                        </div>
                    </td>
                    </tr>
                {/* ))} */}
                </tbody>
            </table>
            </div>
        </div>
    )
}