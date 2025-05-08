"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserPlus, Save } from "lucide-react";

export default function PatientRecord() {
  const [formData, setFormData] = useState({
    nombrePaciente: "",
    fecha_nacimiento: "",
    genero: "",
    ocupacion: "",
    telefono: "",
    email: "",
    direccion: "",
    contacto_emergencia: "",
    tipo_sangre: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:406/pacientes/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(JSON.stringify(formData));

      if (response.ok) {
        alert("¡Paciente registrado con éxito!");
        setFormData({
          nombrePaciente: "",
          fecha_nacimiento: "",
          genero: "",
          ocupacion: "",
          telefono: "",
          email: "",
          direccion: "",
          contacto_emergencia: "",
          tipo_sangre: "",
        });
      } else {
        alert("Error al registrar el paciente.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("¡Error inesperado!");
    }
  };

  return (
    <Card className="border-blue-100 dark:border-blue-900">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
            <UserPlus className="h-5 w-5 text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <CardTitle>Datos del Paciente</CardTitle>
            <CardDescription>
              Registre los datos del nuevo paciente
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo</Label>
              <Input
                id="name"
                placeholder="Nombre completo"
                value={formData.nombrePaciente}
                onChange={(e) =>
                  setFormData({ ...formData, nombrePaciente: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Fecha de Nacimiento</Label>
              <Input
                id="dob"
                type="date"
                value={formData.fecha_nacimiento}
                onChange={(e) =>
                  setFormData({ ...formData, fecha_nacimiento: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Género</Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, genero: value })
                }
              >
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Masculino">Masculino</SelectItem>
                  <SelectItem value="Femenino">Femenino</SelectItem>
                  <SelectItem value="Otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="blood-type">Grupo Sanguíneo</Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, tipo_sangre: value })
                }
              >
                <SelectTrigger id="blood-type">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A-">A-</SelectItem>
                  <SelectItem value="B+">B+</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="AB+">AB+</SelectItem>
                  <SelectItem value="AB-">AB-</SelectItem>
                  <SelectItem value="O+">O+</SelectItem>
                  <SelectItem value="O-">O-</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="occupation">Ocupación</Label>
              <Input
                id="occupation"
                placeholder="Ocupación"
                value={formData.ocupacion}
                onChange={(e) =>
                  setFormData({ ...formData, ocupacion: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={(e) =>
                  setFormData({ ...formData, telefono: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Dirección</Label>
            <Textarea
              id="address"
              placeholder="Dirección completa"
              value={formData.direccion}
              onChange={(e) =>
                setFormData({ ...formData, direccion: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="emergency-contact">Contacto de Emergencia</Label>
            <Input
              id="emergencyContact"
              placeholder="Nombre y teléfono"
              value={formData.contacto_emergencia}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  contacto_emergencia: e.target.value,
                })
              }
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="flex items-center gap-2" onClick={handleSubmit}>
          <Save size={16} />
          <span>Registrar Paciente</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
