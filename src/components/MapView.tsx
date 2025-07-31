import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Layers, ZoomIn, ZoomOut, RotateCcw, MapPin, Navigation } from "lucide-react"

const dataLayers = [
  {
    id: "traffic",
    name: "Traffic Zones",
    description: "Real-time traffic density",
    color: "bg-data-traffic",
    enabled: true,
    count: 156
  },
  {
    id: "hospitals",
    name: "Healthcare Facilities",
    description: "Hospitals and clinics",
    color: "bg-data-hospitals",
    enabled: true,
    count: 47
  },
  {
    id: "schools",
    name: "Educational Institutions",
    description: "Schools and universities",
    color: "bg-data-schools",
    enabled: false,
    count: 89
  },
  {
    id: "population",
    name: "Population Density",
    description: "Demographic data overlay",
    color: "bg-data-population",
    enabled: true,
    count: 234
  }
]

export function MapView() {
  const [layers, setLayers] = useState(dataLayers)

  const toggleLayer = (layerId: string) => {
    setLayers(prev => prev.map(layer => 
      layer.id === layerId ? { ...layer, enabled: !layer.enabled } : layer
    ))
  }

  return (
    <div className="grid lg:grid-cols-4 gap-6 h-full">
      {/* Layer Controls */}
      <div className="lg:col-span-1 space-y-4">
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              Data Layers
            </CardTitle>
            <CardDescription>
              Toggle data layers on the map
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {layers.map((layer) => (
              <div key={layer.id} className="flex items-center justify-between">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${layer.color}`} />
                    <Label htmlFor={layer.id} className="text-sm font-medium">
                      {layer.name}
                    </Label>
                    <Badge variant="secondary" className="text-xs">
                      {layer.count}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {layer.description}
                  </p>
                </div>
                <Switch
                  id={layer.id}
                  checked={layer.enabled}
                  onCheckedChange={() => toggleLayer(layer.id)}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Navigation className="h-5 w-5 text-accent" />
              Map Controls
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start gap-2">
              <ZoomIn className="h-4 w-4" />
              Zoom In
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <ZoomOut className="h-4 w-4" />
              Zoom Out
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <RotateCcw className="h-4 w-4" />
              Reset View
            </Button>
            <Button variant="analytics" className="w-full justify-start gap-2">
              <MapPin className="h-4 w-4" />
              My Location
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Main Map Area */}
      <div className="lg:col-span-3">
        <Card className="h-full bg-gradient-card border-border/50">
          <CardContent className="p-0 h-full">
            <div className="relative h-full min-h-[600px] bg-muted/20 rounded-lg overflow-hidden">
              {/* Placeholder Map Interface */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="h-16 w-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto animate-pulse-glow">
                    <MapPin className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Interactive Map Loading
                    </h3>
                    <p className="text-muted-foreground">
                      Map visualization with data layers will appear here
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Overlay UI */}
              <div className="absolute top-4 left-4 space-y-2">
                {layers.filter(layer => layer.enabled).map((layer) => (
                  <Badge 
                    key={layer.id} 
                    className={`${layer.color} text-white shadow-sm`}
                  >
                    {layer.name}: {layer.count} items
                  </Badge>
                ))}
              </div>

              {/* Zoom Controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Button size="icon" variant="secondary" className="shadow-md">
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary" className="shadow-md">
                  <ZoomOut className="h-4 w-4" />
                </Button>
              </div>

              {/* Attribution */}
              <div className="absolute bottom-4 right-4 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
                © UrbanEyes Geospatial Platform
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}