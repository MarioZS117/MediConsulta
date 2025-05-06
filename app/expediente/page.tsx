import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PatientRecord from "@/components/patient-record"
import DashboardLayout from "@/components/dashboard-layout"
import { UserPlus, Search, Users, UserCheck, FileText, ClipboardList } from "lucide-react"

export default function ExpedientePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div>
            <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">Expediente de Pacientes</h1>
            <p className="text-gray-600 dark:text-gray-300">Gestión de historias clínicas y expedientes</p>
          </div>
        </div>

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
            <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Buscar paciente por nombre, ID o número de teléfono..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                />
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
                    {[1, 2, 3, 4, 5].map((i) => (
                      <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                        <td className="p-3 border-b border-gray-200 dark:border-gray-700">P-{1000 + i}</td>
                        <td className="p-3 border-b border-gray-200 dark:border-gray-700">Paciente Ejemplo {i}</td>
                        <td className="p-3 border-b border-gray-200 dark:border-gray-700">{20 + i * 10}</td>
                        <td className="p-3 border-b border-gray-200 dark:border-gray-700">555-123-{1000 + i}</td>
                        <td className="p-3 border-b border-gray-200 dark:border-gray-700">
                          {i === 1 ? "Hoy" : `Hace ${i} días`}
                        </td>
                        <td className="p-3 border-b border-gray-200 dark:border-gray-700">
                          <div className="flex space-x-2">
                            <button className="p-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                              <Users size={16} />
                            </button>
                            <button className="p-1 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300">
                              <FileText size={16} />
                            </button>
                            <button className="p-1 text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300">
                              <ClipboardList size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
