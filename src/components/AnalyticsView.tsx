import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Activity, Users, Car, Building2, Download, RefreshCw } from "lucide-react"

export function AnalyticsView() {
  const statsCards = [
    {
      title: "Traffic Flow",
      value: "1,234",
      change: "+12.5%",
      trend: "up",
      icon: Car,
      color: "text-data-traffic"
    },
    {
      title: "Population Density",
      value: "8,567",
      change: "+3.2%",
      trend: "up",
      icon: Users,
      color: "text-data-population"
    },
    {
      title: "Infrastructure Points",
      value: "456",
      change: "-2.1%",
      trend: "down",
      icon: Building2,
      color: "text-data-hospitals"
    },
    {
      title: "Active Zones",
      value: "89",
      change: "+8.7%",
      trend: "up",
      icon: Activity,
      color: "text-data-schools"
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Real-time insights and data visualization</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
          <Button variant="analytics" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-md transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center gap-1 text-xs">
                {stat.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-success" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-destructive" />
                )}
                <span className={stat.trend === "up" ? "text-success" : "text-destructive"}>
                  {stat.change}
                </span>
                <span className="text-muted-foreground">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Traffic Over Time Chart */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Car className="h-5 w-5 text-data-traffic" />
              Traffic Flow Over Time
            </CardTitle>
            <CardDescription>
              Daily traffic patterns for the past week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-muted/20 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="h-12 w-12 bg-data-traffic/10 rounded-lg flex items-center justify-center mx-auto">
                  <TrendingUp className="h-6 w-6 text-data-traffic" />
                </div>
                <p className="text-muted-foreground">Line Chart Placeholder</p>
                <p className="text-sm text-muted-foreground">Traffic data visualization</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Infrastructure Distribution */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-data-hospitals" />
              Infrastructure Distribution
            </CardTitle>
            <CardDescription>
              Distribution of public facilities by type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-muted/20 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="h-12 w-12 bg-data-hospitals/10 rounded-lg flex items-center justify-center mx-auto">
                  <Building2 className="h-6 w-6 text-data-hospitals" />
                </div>
                <p className="text-muted-foreground">Pie Chart Placeholder</p>
                <p className="text-sm text-muted-foreground">Infrastructure breakdown</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Insights */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Key Insights
          </CardTitle>
          <CardDescription>
            Automated insights from your geospatial data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-success/10 rounded-lg border border-success/20">
              <TrendingUp className="h-5 w-5 text-success mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Traffic Efficiency Improved</p>
                <p className="text-sm text-muted-foreground">
                  Average traffic flow has increased by 12.5% compared to last month, indicating improved infrastructure usage.
                </p>
                <Badge className="mt-2 bg-success/20 text-success">Positive Trend</Badge>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-warning/10 rounded-lg border border-warning/20">
              <TrendingDown className="h-5 w-5 text-warning mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Infrastructure Gap Detected</p>
                <p className="text-sm text-muted-foreground">
                  Eastern district shows lower infrastructure density. Consider planning additional facilities.
                </p>
                <Badge className="mt-2 bg-warning/20 text-warning">Attention Required</Badge>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <Activity className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Population Growth Trend</p>
                <p className="text-sm text-muted-foreground">
                  Population density in residential zones has grown by 3.2%, indicating successful urban development.
                </p>
                <Badge className="mt-2 bg-primary/20 text-primary">Growth Indicator</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}