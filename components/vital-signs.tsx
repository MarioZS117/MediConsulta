"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save } from "lucide-react"
import axios from "axios"

export default function VitalSigns() {
  interface Patient {
    _id: string
    nombrePaciente: string
  }

  const [patients, setPatients] = useState<Patient[]>([])
  const [selectedPatient, setSelectedPatient] = useState<string>("")
  const [form, setForm] = useState({
    fecha: "",
    hora: "",
    temperatura: "",
    peso: "",
    estatura_cm: "",
    presion_arterial_sistolica: "",
    presion_arterial_diastolica: "",
    frecuencia_cardiaca_lpm: "",
    frecuencia_respiratoria: "",
    saturacion_de_oxigeno: "",
    glucosa: "",
    observaciones_adicionales: "",
  })

  // Llamar al microservicio para obtener los pacientes
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:406/pacientes/")
        setPatients(response.data) // Actualizar la lista de pacientes
      } catch (error) {
        console.error("Error al obtener los pacientes:", error)
      }
    }

    fetchPatients()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const guardarSignosVitales = async () => {
    if (!selectedPatient) {
      alert("Por favor, seleccione un paciente.")
      return
    }

    const nombrePaciente = patients.find((patient) => patient._id === selectedPatient)?.nombrePaciente || ""

    try {
      const fechaHora = new Date(`${form.fecha}T${form.hora}`).toISOString()

      const datos = {
        ...form,
        nombrePaciente,
        fechaHora,
      }

      await axios.post("http://localhost:405/signos-vitales/registro", datos)

      alert("¡Signos vitales guardados!")
      setForm({
        fecha: "",
        hora: "",
        temperatura: "",
        peso: "",
        estatura_cm: "",
        presion_arterial_sistolica: "",
        presion_arterial_diastolica: "",
        frecuencia_cardiaca_lpm: "",
        frecuencia_respiratoria: "",
        saturacion_de_oxigeno: "",
        glucosa: "",
        observaciones_adicionales: "",
      })
      setSelectedPatient("")
    } catch (err) {
      console.error("Error al guardar signos vitales:", err)
      alert("Hubo un error al guardar los signos vitales")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <h2 className="text-2xl font-bold">Signos Vitales</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registro de Signos Vitales</CardTitle>
          <CardDescription>Registre los signos vitales del paciente</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="patient">Paciente</Label>
            <Select value={selectedPatient} onValueChange={setSelectedPatient}>
              <SelectTrigger id="patient">
                <SelectValue placeholder="Seleccionar paciente" />
              </SelectTrigger>
              <SelectContent>
                {patients.map((patient) => (
                  <SelectItem key={patient._id} value={patient._id}>
                    {patient.nombrePaciente}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vs-date">Fecha</Label>
              <Input
                id="vs-date"
                type="date"
                name="fecha"
                value={form.fecha}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vs-time">Hora</Label>
              <Input
                id="vs-time"
                type="time"
                name="hora"
                value={form.hora}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vs-temperature">Temperatura (°C)</Label>
              <Input name="temperatura" id="vs-temperature" type="number" step="0.1" placeholder="36.5" value={form.temperatura} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vs-weight">Peso (kg)</Label>
              <Input name="peso" id="vs-weight" type="number" step="0.1" placeholder="70.0" value={form.peso} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vs-height">Estatura (cm)</Label>
              <Input name="estatura_cm" id="vs-height" type="number" placeholder="170" value={form.estatura_cm} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vs-systolic">Presión Arterial Sistólica (mmHg)</Label>
              <Input name="presion_arterial_sistolica" id="vs-systolic" type="number" placeholder="120" value={form.presion_arterial_sistolica} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vs-diastolic">Presión Arterial Diastólica (mmHg)</Label>
              <Input name="presion_arterial_diastolica" id="vs-diastolic" type="number" placeholder="80" value={form.presion_arterial_diastolica} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vs-pulse">Frecuencia Cardíaca (lpm)</Label>
              <Input name="frecuencia_cardiaca_lpm" id="vs-pulse" type="number" placeholder="72" value={form.frecuencia_cardiaca_lpm} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vs-respiratory">Frecuencia Respiratoria (rpm)</Label>
              <Input name="frecuencia_respiratoria" id="vs-respiratory" type="number" placeholder="16" value={form.frecuencia_respiratoria} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vs-oxygen">Saturación de Oxígeno (%)</Label>
              <Input name="saturacion_de_oxigeno" id="vs-oxygen" type="number" placeholder="98" value={form.saturacion_de_oxigeno} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vs-glucose">Glucosa (mg/dL)</Label>
              <Input name="glucosa" id="vs-glucose" type="number" placeholder="90" value={form.glucosa} onChange={handleChange} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="vs-notes">Observaciones</Label>
            <Input name="observaciones_adicionales" id="vs-notes" placeholder="Observaciones adicionales" value={form.observaciones_adicionales} onChange={handleChange} />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={guardarSignosVitales}
            className="w-full md:w-auto flex items-center gap-2"
          >
            <Save size={16} />
            <span>Guardar Registro</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
