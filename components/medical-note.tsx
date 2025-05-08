"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FilePenLine, Save } from "lucide-react"

export default function MedicalNote() {
  interface Patient {
    _id: string
    nombrePaciente: string
  }

  const [selectedPatient, setSelectedPatient] = useState<string>("")
  const [patients, setPatients] = useState<Patient[]>([])
  const [formData, setFormData] = useState({
    nombrePaciente: "",
    fechaLugar: new Date().toISOString().split("T")[0],
    motivoConsulta: "",
    examenFisico: "",
    diagnostico: "",
    tratamiento: "",
    recomendaciones: "",
  })

  // Llamar al microservicio para obtener los pacientes
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch("http://localhost:406/pacientes/")
        const data = await response.json()
        setPatients(data) // Actualizar la lista de pacientes
      } catch (error) {
        console.error("Error al obtener los pacientes:", error)
      }
    }

    fetchPatients()
  }, [])

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:401/notas-medicas/add-complete-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          nombrePaciente: patients.find((patient) => patient._id === selectedPatient)?.nombrePaciente || "",
        }),
      })

      if (response.ok) {
        alert("¡Nota médica registrada con éxito!")
        setFormData({
          nombrePaciente: "",
          fechaLugar: new Date().toISOString().split("T")[0],
          motivoConsulta: "",
          examenFisico: "",
          diagnostico: "",
          tratamiento: "",
          recomendaciones: "",
        })
        setSelectedPatient("")
      } else {
        alert("Error al registrar la nota médica.")
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error)
      alert("¡Error inesperado!")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <h2 className="text-2xl font-bold">Nota Médica</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        <div className="space-y-2">
          <Label htmlFor="date">Fecha</Label>
          <Input
            id="date"
            type="date"
            value={formData.fechaLugar}
            onChange={(e) => setFormData({ ...formData, fechaLugar: e.target.value })}
          />
        </div>
      </div>

      <Tabs defaultValue="note" className="w-full">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="note" className="flex items-center gap-2">
            <FilePenLine size={16} />
            <span>Nota Médica</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="note">
          <Card>
            <CardHeader>
              <CardTitle>Nota Médica</CardTitle>
              <CardDescription>Registre la información de la consulta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="motivoConsulta">Motivo de Consulta</Label>
                <Textarea
                  id="motivoConsulta"
                  placeholder="Describa el motivo de consulta"
                  value={formData.motivoConsulta}
                  onChange={(e) => setFormData({ ...formData, motivoConsulta: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="examenFisico">Examen Físico</Label>
                <Textarea
                  id="examenFisico"
                  placeholder="Registre los hallazgos del examen físico"
                  value={formData.examenFisico}
                  onChange={(e) => setFormData({ ...formData, examenFisico: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="diagnostico">Diagnóstico</Label>
                <Textarea
                  id="diagnostico"
                  placeholder="Diagnóstico presuntivo o definitivo"
                  value={formData.diagnostico}
                  onChange={(e) => setFormData({ ...formData, diagnostico: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tratamiento">Tratamiento</Label>
                <Textarea
                  id="tratamiento"
                  placeholder="Plan de tratamiento e indicaciones"
                  value={formData.tratamiento}
                  onChange={(e) => setFormData({ ...formData, tratamiento: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="recomendaciones">Recomendaciones</Label>
                <Textarea
                  id="recomendaciones"
                  placeholder="Recomendaciones adicionales para el paciente"
                  value={formData.recomendaciones}
                  onChange={(e) => setFormData({ ...formData, recomendaciones: e.target.value })}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full md:w-auto flex items-center gap-2" onClick={handleSubmit}>
                <Save size={16} />
                <span>Guardar Nota</span>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
