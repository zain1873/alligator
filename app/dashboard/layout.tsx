import type React from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <DashboardHeader />
      <div className="flex flex-1 overflow-hidden pt-16">
        {/* Sidebar assumed to be fixed at w-64 */}
        <DashboardSidebar />
        <div className="flex-1 overflow-y-auto overflow-x-hidden pl-16 md:pl-64">
          <div className="container p-6 mx-auto max-w-7xl">{children}</div>
        </div>
      </div>
    </div>
  )
}
