"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LockKeyhole, Mail, UserPlus, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [nombreConsultorio, setNombreConsultorio] = useState("");
  const [direccionConsultorio, setDireccionConsultorio] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [cedulaProfesional, setCedulaProfesional] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    // Validación de campos
    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      setLoading(false);
      return;
    }

    try {
      // Realizar la solicitud de inicio de sesión al microservicio
      const response = await axios.post("http://localhost:402/medicos/login", {
        correoElectronico: email,
        contrasena: password,
      });

      console.log("Login exitoso:", response.data);
      // Redirigir al dashboard o manejar el inicio de sesión exitoso
      window.location.href = "/dashboard";
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      if (axios.isAxiosError(err) && err.response?.data?.msg) {
        setError(err.response.data.msg);
      } else {
        setError("Error al iniciar sesión. Inténtalo nuevamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:402/medicos/registro", {
        nombre,
        apellidos,
        correoElectronico,
        contrasena,
        nombreConsultorio,
        direccionConsultorio,
        especialidad,
        cedulaProfesional,
      });
      console.log("Registro exitoso:", response.data);

      // Mostrar mensaje de éxito
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      
      // Cambiar a la pestaña de inicio de sesión
      const loginTab = document.querySelector('[value="login"]') as HTMLElement | null;
      if (loginTab) {
        loginTab.click();
      }
    } catch (err) {
      console.error("Error al registrar:", err);
      alert("Error al registrar. Inténtalo nuevamente.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-slate-900 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center shadow-[8px_8px_16px_rgba(0,0,0,0.10),-8px_-8px_16px_rgba(255,255,255,0.9)] dark:shadow-[8px_8px_16px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.05)]">
              <LockKeyhole className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">ConsultaMed</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Sistema de Gestión Médica</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 p-1 bg-blue-50 dark:bg-slate-800 rounded-xl shadow-inner">
            <TabsTrigger
              value="login"
              className={cn(
                "flex items-center gap-2 rounded-lg transition-all",
                "data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700",
                "data-[state=active]:shadow-[4px_4px_10px_rgba(0,0,0,0.08),-4px_-4px_10px_rgba(255,255,255,0.8)]",
                "dark:data-[state=active]:shadow-[4px_4px_10px_rgba(0,0,0,0.3),-4px_-4px_10px_rgba(255,255,255,0.05)]"
              )}
            >
              <LogIn size={16} />
              <span>Iniciar Sesión</span>
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className={cn(
                "flex items-center gap-2 rounded-lg transition-all",
                "data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700",
                "data-[state=active]:shadow-[4px_4px_10px_rgba(0,0,0,0.08),-4px_-4px_10px_rgba(255,255,255,0.8)]",
                "dark:data-[state=active]:shadow-[4px_4px_10px_rgba(0,0,0,0.3),-4px_-4px_10px_rgba(255,255,255,0.05)]"
              )}
            >
              <UserPlus size={16} />
              <span>Registrarse</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className={cn(
              "border-none bg-blue-50 dark:bg-slate-800",
              "shadow-[8px_8px_16px_rgba(0,0,0,0.10),-8px_-8px_16px_rgba(255,255,255,0.9)]",
              "dark:shadow-[8px_8px_16px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.05)]",
              "rounded-2xl"
            )}>
              <CardHeader>
                <CardTitle className="text-blue-600 dark:text-blue-400">Bienvenido de vuelta</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Ingresa tus credenciales para acceder al sistema
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <Mail size={16} />
                    <span>Correo Electrónico</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="doctor@consultamed.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={cn(
                      "bg-blue-50 dark:bg-slate-800 border-none",
                      "shadow-[inset_4px_4px_8px_rgba(0,0,0,0.08),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]",
                      "dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]",
                      "focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <LockKeyhole size={16} />
                    <span>Contraseña</span>
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={cn(
                      "bg-blue-50 dark:bg-slate-800 border-none",
                      "shadow-[inset_4px_4px_8px_rgba(0,0,0,0.08),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]",
                      "dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]",
                      "focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
                    )}
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button
                  onClick={handleLogin}
                  disabled={loading}
                  className={cn(
                    "w-full bg-blue-500 hover:bg-blue-600",
                    "shadow-[4px_4px_8px_rgba(0,0,0,0.10),-4px_-4px_8px_rgba(255,255,255,0.9)]",
                    "dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)]",
                    "transform active:scale-95 transition-all"
                  )}
                >
                  {loading ? "Cargando..." : "Iniciar Sesión"}
                </Button>
                <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline text-center">
                  ¿Olvidaste tu contraseña?
                </a>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card
              className={cn(
                "border-none bg-blue-50 dark:bg-slate-800",
                "shadow-[8px_8px_16px_rgba(0,0,0,0.10),-8px_-8px_16px_rgba(255,255,255,0.9)]",
                "dark:shadow-[8px_8px_16px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.05)]",
                "rounded-2xl"
              )}
            >
              <CardHeader>
                <CardTitle className="text-blue-600 dark:text-blue-400">Crea tu cuenta</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Ingresa tus datos para registrarte en el sistema
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <span>Nombre</span>
                  </Label>
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="bg-blue-50 dark:bg-slate-800 border-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apellidos" className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <span>Apellidos</span>
                  </Label>
                  <Input
                    id="apellidos"
                    type="text"
                    placeholder="Apellidos"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                    className="bg-blue-50 dark:bg-slate-800 border-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="correoElectronico" className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <Mail size={16} />
                    <span>Correo Electrónico</span>
                  </Label>
                  <Input
                    id="correoElectronico"
                    type="email"
                    placeholder="doctor@consultamed.com"
                    value={correoElectronico}
                    onChange={(e) => setCorreoElectronico(e.target.value)}
                    className="bg-blue-50 dark:bg-slate-800 border-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contrasena" className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <LockKeyhole size={16} />
                    <span>Contraseña</span>
                  </Label>
                  <Input
                    id="contrasena"
                    type="password"
                    placeholder="********"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    className="bg-blue-50 dark:bg-slate-800 border-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nombreConsultorio" className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <span>Nombre del Consultorio</span>
                  </Label>
                  <Input
                    id="nombreConsultorio"
                    type="text"
                    placeholder="Nombre del Consultorio"
                    value={nombreConsultorio}
                    onChange={(e) => setNombreConsultorio(e.target.value)}
                    className="bg-blue-50 dark:bg-slate-800 border-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="direccionConsultorio" className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <span>Dirección del Consultorio</span>
                  </Label>
                  <Input
                    id="direccionConsultorio"
                    type="text"
                    placeholder="Dirección del Consultorio"
                    value={direccionConsultorio}
                    onChange={(e) => setDireccionConsultorio(e.target.value)}
                    className="bg-blue-50 dark:bg-slate-800 border-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="especialidad" className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <span>Especialidad</span>
                  </Label>
                  <Input
                    id="especialidad"
                    type="text"
                    placeholder="Especialidad"
                    value={especialidad}
                    onChange={(e) => setEspecialidad(e.target.value)}
                    className="bg-blue-50 dark:bg-slate-800 border-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cedulaProfesional" className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <span>Cédula Profesional</span>
                  </Label>
                  <Input
                    id="cedulaProfesional"
                    type="text"
                    placeholder="Cédula Profesional"
                    value={cedulaProfesional}
                    onChange={(e) => setCedulaProfesional(e.target.value)}
                    className="bg-blue-50 dark:bg-slate-800 border-none"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button
                  onClick={handleRegister}
                  className="w-full bg-blue-500 hover:bg-blue-600"
                >
                  Registrarse
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}