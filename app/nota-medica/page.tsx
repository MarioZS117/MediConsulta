
import DashboardLayout from "@/components/dashboard-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus} from "lucide-react"
import VitalSigns from "@/components/vital-signs"
import MedicalNot from "@/components/medical-note"

export default function SignosVitales() {
    return(
        <DashboardLayout> 
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">Panel Principal</h1>
                        <p className="text-gray-600 dark:text-gray-300">Bienvenido, Dr. Juan Pérez</p>
                    </div>
                </div>
            </div>
            <Tabs className="w-full">
                <MedicalNot />
            </Tabs>
        </DashboardLayout>


    )
}