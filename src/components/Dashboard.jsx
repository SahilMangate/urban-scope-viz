import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar.jsx"
import { DashboardHeader } from "@/components/DashboardHeader.jsx"
import { MapView } from "@/components/MapView.jsx"
import { AnalyticsView } from "@/components/AnalyticsView.jsx"
import { UploadDataView } from "@/components/UploadDataView.jsx"
import { SettingsView } from "@/components/SettingsView.jsx"

export default function Dashboard() {
  const [currentView, setCurrentView] = useState("map")

  const renderCurrentView = () => {
    switch (currentView) {
      case "map":
        return <MapView />
      case "analytics":
        return <AnalyticsView />
      case "upload":
        return <UploadDataView />
      case "settings":
        return <SettingsView />
      default:
        return <MapView />
    }
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar currentView={currentView} onViewChange={setCurrentView} />
        
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          
          <main className="flex-1 p-6">
            {renderCurrentView()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}