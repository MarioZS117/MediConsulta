
import DashboardLayout from "@/components/dashboard-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus} from "lucide-react"
import VitalSigns from "@/components/vital-signs"

export default function SignosVitales() {


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
              </TabsList>

              <TabsContent value="new">
                  <VitalSigns />
              </TabsContent>

            </Tabs>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
        </div>
      </div>
    </DashboardLayout>
  )
}