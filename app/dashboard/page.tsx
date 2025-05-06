import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, Calendar, ClipboardList, Clock, Users, FileText, TrendingUp, Bell } from "lucide-react"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus, Search, UserCheck } from "lucide-react"
import PatientRecord from "@/components/patient-record"
import PatientList from "@/components/list-patient"

export default function Dashboard() {
  // Datos de ejemplo para el dashboard
  // const upcomingAppointments = [
  //   { id: 1, patient: "María García", time: "10:00 AM", type: "Consulta General" },
  //   { id: 2, patient: "Carlos López", time: "11:30 AM", type: "Seguimiento" },
  //   { id: 3, patient: "Ana Martínez", time: "2:15 PM", type: "Primera Consulta" },
  // ]

  // const recentPatients = [
  //   { id: 1, name: "Juan Pérez", age: 45, lastVisit: "Ayer", status: "Seguimiento" },
  //   { id: 2, name: "Laura Sánchez", age: 32, lastVisit: "Hace 3 días", status: "Recuperado" },
  //   { id: 3, name: "Roberto Díaz", age: 58, lastVisit: "Hace 1 semana", status: "En tratamiento" },
  // ]

  // const notifications = [
  //   { id: 1, message: "Resultados de laboratorio disponibles para María García", time: "Hace 30 min" },
  //   { id: 2, message: "Recordatorio: Actualizar historial de Carlos López", time: "Hace 2 horas" },
  //   { id: 3, message: "Nueva cita programada para mañana a las 9:00 AM", time: "Hace 5 horas" },
  // ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">Panel Principal</h1>
            <p className="text-gray-600 dark:text-gray-300">Bienvenido, Dr. Juan Pérez</p>
          </div>
       
        </div>
        <div>
          <Tabs defaultValue="new" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="new" className="flex items-center gap-2">
                    <UserPlus size={16} />
                    <span>Nuevo Paciente</span>
                  </TabsTrigger>
                  <TabsTrigger value="existing" className="flex items-center gap-2">
                    <UserCheck size={16} />
                    <span>Pacientes Existentes</span>
                  </TabsTrigger>
              </TabsList>

              <TabsContent value="new">
                  <PatientRecord />
              </TabsContent>

              <TabsContent value="existing">
                  <PatientList />
              </TabsContent>

            </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 border-blue-200 dark:border-blue-700">
            <CardContent className="p-6">

       
            
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 border-green-200 dark:border-green-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600 dark:text-green-300">Consultas Completadas</p>
                  <h3 className="text-3xl font-bold text-green-700 dark:text-white mt-1">5</h3>
                </div>
                <div className="h-12 w-12 bg-green-100 dark:bg-green-700 rounded-full flex items-center justify-center">
                  <ClipboardList className="h-6 w-6 text-green-600 dark:text-green-300" />
                </div>
              </div>
              <div className="mt-4 text-sm text-green-600 dark:text-green-300 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>Tiempo promedio: 25 min</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 border-purple-200 dark:border-purple-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-300">Estudios Pendientes</p>
                  <h3 className="text-3xl font-bold text-purple-700 dark:text-white mt-1">12</h3>
                </div>
                <div className="h-12 w-12 bg-purple-100 dark:bg-purple-700 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
              </div>
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-300 flex items-center">
                <Activity className="h-4 w-4 mr-1" />
                <span>4 resultados nuevos</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800 border-amber-200 dark:border-amber-700">
            <CardContent className="p-6">
              
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
        </div>
      </div>
    </DashboardLayout>
  )
}