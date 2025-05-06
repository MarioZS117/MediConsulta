import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Settings, Bell, Shield, Save, Upload } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div>
            <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">Mi Perfil</h1>
            <p className="text-gray-600 dark:text-gray-300">Gestiona tu información y preferencias</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="md:col-span-1 border-blue-100 dark:border-blue-900">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="h-32 w-32 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center mb-4 overflow-hidden">
                    <User className="h-16 w-16 text-blue-600 dark:text-blue-300" />
                  </div>
                  <button className="absolute bottom-4 right-0 h-8 w-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white">
                    <Upload size={14} />
                  </button>
                </div>
                <h2 className="text-xl font-bold">Dr. Juan Pérez</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Médico General</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Cédula: 12345678</p>

                <div className="w-full mt-6 space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Información Personal
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Preferencias
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Bell className="mr-2 h-4 w-4" />
                    Notificaciones
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="mr-2 h-4 w-4" />
                    Seguridad
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="md:col-span-3 space-y-6">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal" className="flex items-center gap-2">
                  <User size={16} />
                  <span className="hidden md:inline">Personal</span>
                </TabsTrigger>
                <TabsTrigger value="preferences" className="flex items-center gap-2">
                  <Settings size={16} />
                  <span className="hidden md:inline">Preferencias</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center gap-2">
                  <Bell size={16} />
                  <span className="hidden md:inline">Notificaciones</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center gap-2">
                  <Shield size={16} />
                  <span className="hidden md:inline">Seguridad</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <Card className="border-blue-100 dark:border-blue-900">
                  <CardHeader>
                    <CardTitle>Información Personal</CardTitle>
                    <CardDescription>Actualiza tu información de contacto y profesional</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">Nombre</Label>
                        <Input id="first-name" defaultValue="Juan" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Apellido</Label>
                        <Input id="last-name" defaultValue="Pérez" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input id="email" type="email" defaultValue="dr.juan@consultamed.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" defaultValue="555-123-4567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="specialty">Especialidad</Label>
                        <Input id="specialty" defaultValue="Médico General" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="license">Cédula Profesional</Label>
                        <Input id="license" defaultValue="12345678" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Biografía Profesional</Label>
                      <Textarea
                        id="bio"
                        defaultValue="Médico general con más de 10 años de experiencia en atención primaria y medicina preventiva."
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Dirección del Consultorio</Label>
                      <Textarea
                        id="address"
                        defaultValue="Av. Principal #123, Colonia Centro, Ciudad de México"
                        className="min-h-[80px]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="flex items-center gap-2">
                      <Save size={16} />
                      <span>Guardar Cambios</span>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="preferences">
                <Card className="border-blue-100 dark:border-blue-900">
                  <CardHeader>
                    <CardTitle>Preferencias del Sistema</CardTitle>
                    <CardDescription>Personaliza la apariencia y comportamiento del sistema</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Apariencia</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="dark-mode" className="font-medium">
                            Modo Oscuro
                          </Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Activa el modo oscuro para reducir la fatiga visual
                          </p>
                        </div>
                        <Switch id="dark-mode" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="high-contrast" className="font-medium">
                            Alto Contraste
                          </Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Mejora la legibilidad con mayor contraste
                          </p>
                        </div>
                        <Switch id="high-contrast" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="font-size">Tamaño de Fuente</Label>
                        <Select defaultValue="medium">
                          <SelectTrigger id="font-size">
                            <SelectValue placeholder="Seleccionar tamaño" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Pequeño</SelectItem>
                            <SelectItem value="medium">Mediano</SelectItem>
                            <SelectItem value="large">Grande</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Comportamiento</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="auto-save" className="font-medium">
                            Guardado Automático
                          </Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Guarda automáticamente los formularios mientras escribes
                          </p>
                        </div>
                        <Switch id="auto-save" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="sound-effects" className="font-medium">
                            Efectos de Sonido
                          </Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Reproduce sonidos para notificaciones y acciones
                          </p>
                        </div>
                        <Switch id="sound-effects" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="language">Idioma</Label>
                        <Select defaultValue="es">
                          <SelectTrigger id="language">
                            <SelectValue placeholder="Seleccionar idioma" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="es">Español</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="flex items-center gap-2">
                      <Save size={16} />
                      <span>Guardar Preferencias</span>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card className="border-blue-100 dark:border-blue-900">
                  <CardHeader>
                    <CardTitle>Configuración de Notificaciones</CardTitle>
                    <CardDescription>Controla qué notificaciones recibes y cómo</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Notificaciones del Sistema</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="new-appointments" className="font-medium">
                            Nuevas Citas
                          </Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Recibe notificaciones cuando se agende una nueva cita
                          </p>
                        </div>
                        <Switch id="new-appointments" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="appointment-reminders" className="font-medium">
                            Recordatorios de Citas
                          </Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Recibe recordatorios antes de las citas programadas
                          </p>
                        </div>
                        <Switch id="appointment-reminders" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="lab-results" className="font-medium">
                            Resultados de Laboratorio
                          </Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Notificaciones cuando hay nuevos resultados disponibles
                          </p>
                        </div>
                        <Switch id="lab-results" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="system-updates" className="font-medium">
                            Actualizaciones del Sistema
                          </Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Notificaciones sobre nuevas funciones y mejoras
                          </p>
                        </div>
                        <Switch id="system-updates" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Métodos de Notificación</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-notifications" className="font-medium">
                            Correo Electrónico
                          </Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Recibe notificaciones por correo electrónico
                          </p>
                        </div>
                        <Switch id="email-notifications" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="push-notifications" className="font-medium">
                            Notificaciones Push
                          </Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Recibe notificaciones en el navegador
                          </p>
                        </div>
                        <Switch id="push-notifications" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="sms-notifications" className="font-medium">
                            SMS
                          </Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Recibe notificaciones por mensaje de texto
                          </p>
                        </div>
                        <Switch id="sms-notifications" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="flex items-center gap-2">
                      <Save size={16} />
                      <span>Guardar Configuración</span>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card className="border-blue-100 dark:border-blue-900">
                  <CardHeader>
                    <CardTitle>Seguridad de la Cuenta</CardTitle>
                    <CardDescription>Gestiona la seguridad y acceso a tu cuenta</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Cambiar Contraseña</h3>
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Contraseña Actual</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">Nueva Contraseña</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar Nueva Contraseña</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                      <Button className="mt-2">Actualizar Contraseña</Button>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Autenticación de Dos Factores</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="two-factor" className="font-medium">
                            Activar Autenticación de Dos Factores
                          </Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Añade una capa adicional de seguridad a tu cuenta
                          </p>
                        </div>
                        <Switch id="two-factor" />
                      </div>
                      <Button variant="outline" className="mt-2">
                        Configurar Autenticación de Dos Factores
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Sesiones Activas</h3>
                      <div className="border rounded-md p-4 space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b">
                          <div>
                            <p className="font-medium">Este Dispositivo</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Windows 10 - Chrome - Ciudad de México
                            </p>
                          </div>
                          <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full">
                            Activo
                          </span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b">
                          <div>
                            <p className="font-medium">iPhone 13</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              iOS 16 - Safari - Ciudad de México
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            Cerrar Sesión
                          </Button>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">MacBook Pro</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              macOS - Firefox - Ciudad de México
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            Cerrar Sesión
                          </Button>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="mt-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                      >
                        Cerrar Todas las Sesiones
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
