import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, BarChart3, Upload, Settings, Eye, Layers } from "lucide-react"

export default function LandingPage({ onLogin }: { onLogin: () => void }) {
  const [credentials, setCredentials] = useState({ username: "", password: "" })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Eye className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">UrbanEyes</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">Features</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Visualize Your
                  <span className="bg-gradient-hero bg-clip-text text-transparent block">
                    Smart City
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Powerful geospatial analytics platform for city planners to visualize traffic, infrastructure, and population data with interactive mapping.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" className="animate-pulse-glow">
                  Get Started
                </Button>
                <Button variant="outline" size="xl">
                  View Demo
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-success rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Real-time Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Interactive Maps</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Analytics</span>
                </div>
              </div>
            </div>

            {/* Login Card */}
            <div className="lg:justify-self-end">
              <Card className="w-full max-w-md bg-gradient-card border-border/50 shadow-lg">
                <CardHeader className="text-center space-y-2">
                  <CardTitle className="text-2xl text-foreground">Welcome Back</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Sign in to access your analytics dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-foreground">Username</Label>
                      <Input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={credentials.username}
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-foreground">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        className="bg-background border-border"
                      />
                    </div>
                    <Button type="submit" className="w-full" variant="hero">
                      Sign In
                    </Button>
                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Continue with Google
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Powerful Analytics Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to analyze, visualize, and understand your city's data
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-card border-border/50 hover:shadow-md transition-smooth">
              <CardHeader className="text-center">
                <div className="h-12 w-12 bg-data-traffic/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-data-traffic" />
                </div>
                <CardTitle className="text-lg">Interactive Maps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Visualize data layers with interactive mapping and real-time updates
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-md transition-smooth">
              <CardHeader className="text-center">
                <div className="h-12 w-12 bg-data-hospitals/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-data-hospitals" />
                </div>
                <CardTitle className="text-lg">Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Generate insights with powerful charts and statistical analysis
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-md transition-smooth">
              <CardHeader className="text-center">
                <div className="h-12 w-12 bg-data-schools/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-6 w-6 text-data-schools" />
                </div>
                <CardTitle className="text-lg">Data Import</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Upload CSV, GeoJSON, and other formats to enhance your analysis
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-md transition-smooth">
              <CardHeader className="text-center">
                <div className="h-12 w-12 bg-data-population/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Layers className="h-6 w-6 text-data-population" />
                </div>
                <CardTitle className="text-lg">Layer Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Control multiple data layers with easy toggle and customization
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}