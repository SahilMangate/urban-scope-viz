import { useState } from "react"
import LandingPage from "@/components/LandingPage.jsx"
import Dashboard from "@/components/Dashboard.jsx"

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return <LandingPage onLogin={handleLogin} />
  }

  return <Dashboard />
};

export default Index;
