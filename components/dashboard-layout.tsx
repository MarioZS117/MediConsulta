"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Activity,
  Calendar,
  ClipboardList,
  FileText,
  Home,
  LogOut,
  Menu,
  Search,
  Settings,
  User,
  Users,
  X,
  Bell,
} from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false)
    }
  }, [pathname, isMobile])

  const navigation = [
    { name: "Panel Principal", href: "/dashboard", icon: Home },
    { name: "Expediente", href: "/expediente", icon: Users },
    { name: "Nota Médica", href: "/nota-medica", icon: FileText },
    { name: "Estudios", href: "/estudios", icon: ClipboardList },
    { name: "Imagenología", href: "/imagenologia", icon: ClipboardList },
    { name: "Signos Vitales", href: "/signos-vitales", icon: Activity },
    { name: "Diagnósticos", href: "/diagnosticos", icon: ClipboardList },
    { name: "Agenda", href: "/agenda", icon: Calendar },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
          <Link href="/dashboard" className="flex items-center">
            <div className="relative w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mr-2">
              <Activity className="h-4 w-4 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-blue-700 dark:text-blue-400">ConsultaMed</span>
          </Link>
          <button
            className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        <nav className="px-2 py-2 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 ${isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"}`}
                />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center mr-3">
              <User className="h-5 w-5 text-blue-600 dark:text-blue-300" />
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">Dr. Juan Pérez</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Médico General</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Link href="/perfil">
              <Button variant="outline" size="sm" className="flex items-center">
                <Settings className="h-4 w-4 mr-2" />
                Perfil
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm" className="flex items-center text-red-600 dark:text-red-400">
                <LogOut className="h-4 w-4 mr-2" />
                Salir
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className={`lg:pl-64 flex flex-col min-h-screen`}>
        {/* Top header */}
        <header className="sticky top-0 z-30 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
          <div className="flex h-16 items-center justify-between px-4">
            <button
              className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>

            <div className="flex items-center space-x-4">
              <button className="relative text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-xs text-white">
                  3
                </span>
              </button>
              <ModeToggle />
              <div className="hidden md:flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center mr-2">
                  <User className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dr. Juan Pérez</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-4 px-4 md:px-6">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© 2025 ConsultaMed - Sistema de Consulta Médica</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
