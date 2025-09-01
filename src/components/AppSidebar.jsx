import { MapPin, BarChart3, Upload, Settings, Eye } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"

const navigationItems = [
  { id: "map", title: "Map View", icon: MapPin, color: "text-data-traffic" },
  { id: "analytics", title: "Analytics", icon: BarChart3, color: "text-data-hospitals" },
  { id: "upload", title: "Upload Data", icon: Upload, color: "text-data-schools" },
  { id: "settings", title: "Settings", icon: Settings, color: "text-data-population" },
]

export function AppSidebar({ currentView, onViewChange }) {
  const { state } = useSidebar()

  return (
    <Sidebar
      className={`border-r border-border bg-card transition-smooth ${
        state === "collapsed" ? "w-18" : "w-64"
      }`}
      collapsible="icon"
    >
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
            <Eye className="h-5 w-5 text-primary-foreground" />
          </div>
          {state !== "collapsed" && (
            <div>
              <h2 className="text-lg font-bold text-foreground">UrbanEyes</h2>
              <p className="text-xs text-muted-foreground">Analytics Dashboard</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className={state === "collapsed" ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onViewChange(item.id)}
                    className={`w-full justify-start transition-smooth ${
                      currentView === item.id
                        ? "bg-primary/10 text-primary border border-primary/20 shadow-sm"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                    tooltip={state === "collapsed" ? item.title : undefined}
                  >
                    <item.icon className={`h-5 w-5 flex-shrink-0 ${
                      currentView === item.id ? "text-primary" : item.color
                    }`} />
                    {state !== "collapsed" && (
                      <span className="ml-3 font-medium">{item.title}</span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}