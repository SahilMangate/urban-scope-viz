import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { DashboardHeader } from "@/components/DashboardHeader"
import { MapView } from "@/components/MapView"
import { AnalyticsView } from "@/components/AnalyticsView"
import { UploadDataView } from "@/components/UploadDataView"
import { SettingsView } from "@/components/SettingsView"

type ViewType = "map" | "analytics" | "upload" | "settings"

export default function Dashboard() {
  const [currentView, setCurrentView] = useState<ViewType>("map")

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