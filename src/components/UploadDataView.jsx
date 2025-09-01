import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, CheckCircle, AlertCircle, X } from "lucide-react"

// UploadedFile structure: { id, name, type, size, status, dataType }

export function UploadDataView() {
  const [selectedDataType, setSelectedDataType] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: "1",
      name: "traffic_data_2024.csv",
      type: "CSV",
      size: "2.4 MB",
      status: "success",
      dataType: "Traffic"
    },
    {
      id: "2",
      name: "hospital_locations.geojson",
      type: "GeoJSON",
      size: "856 KB",
      status: "success",
      dataType: "Healthcare"
    }
  ])

  const dataTypes = [
    { value: "traffic", label: "Traffic Data", icon: "🚗" },
    { value: "hospitals", label: "Healthcare Facilities", icon: "🏥" },
    { value: "schools", label: "Educational Institutions", icon: "🏫" },
    { value: "population", label: "Population Data", icon: "👥" },
    { value: "infrastructure", label: "Infrastructure", icon: "🏗️" }
  ]

  const handleFileUpload = (event) => {
    const files = event.target.files
    if (files && selectedDataType) {
      // Simulate file upload
      Array.from(files).forEach((file, index) => {
        const newFile = {
          id: Date.now().toString() + index,
          name: file.name,
          type: file.name.split('.').pop()?.toUpperCase() || 'Unknown',
          size: (file.size / 1024 / 1024).toFixed(1) + ' MB',
          status: "uploading",
          dataType: dataTypes.find(dt => dt.value === selectedDataType)?.label || selectedDataType
        }
        
        setUploadedFiles(prev => [...prev, newFile])
        
        // Simulate upload completion
        setTimeout(() => {
          setUploadedFiles(prev => prev.map(f => 
            f.id === newFile.id ? { ...f, status: "success" } : f
          ))
        }, 2000)
      })
    }
  }

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId))
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-success" />
      case "error":
        return <AlertCircle className="h-4 w-4 text-destructive" />
      case "uploading":
        return <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Upload Data</h1>
        <p className="text-muted-foreground">Import CSV, GeoJSON, and other data files to enhance your analytics</p>
      </div>

      {/* Upload Interface */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" />
              Upload New Data
            </CardTitle>
            <CardDescription>
              Select data type and upload your files
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="dataType">Data Type</Label>
              <Select value={selectedDataType} onValueChange={setSelectedDataType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select data type" />
                </SelectTrigger>
                <SelectContent>
                  {dataTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      <span className="flex items-center gap-2">
                        <span>{type.icon}</span>
                        {type.label}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="file">Choose Files</Label>
              <div className="relative">
                <Input
                  id="file"
                  type="file"
                  multiple
                  accept=".csv,.json,.geojson,.kml,.shp"
                  onChange={handleFileUpload}
                  disabled={!selectedDataType}
                  className="cursor-pointer"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Supported formats: CSV, GeoJSON, KML, Shapefile (max 10MB each)
              </p>
            </div>

            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag and drop files here, or click to browse
              </p>
              <Button variant="outline" disabled={!selectedDataType}>
                Browse Files
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Data Type Information */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-accent" />
              Supported Data Types
            </CardTitle>
            <CardDescription>
              Learn about the different data types you can upload
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dataTypes.map((type) => (
                <div key={type.value} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <span className="text-xl">{type.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{type.label}</h4>
                    <p className="text-sm text-muted-foreground">
                      {type.value === "traffic" && "Traffic flow data, congestion zones, vehicle counts"}
                      {type.value === "hospitals" && "Healthcare facility locations, capacity, services"}
                      {type.value === "schools" && "Educational institution data, enrollment, facilities"}
                      {type.value === "population" && "Demographic data, density maps, census information"}
                      {type.value === "infrastructure" && "Public infrastructure, utilities, maintenance data"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Uploaded Files */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle>Uploaded Files</CardTitle>
          <CardDescription>
            Manage your uploaded data files
          </CardDescription>
        </CardHeader>
        <CardContent>
          {uploadedFiles.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No files uploaded yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {uploadedFiles.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-4 flex-1">
                    {getStatusIcon(file.status)}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{file.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {file.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {file.dataType}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{file.size}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFile(file.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}