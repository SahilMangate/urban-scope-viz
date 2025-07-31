import { useState } from "react"
import LandingPage from "@/components/LandingPage"
import Dashboard from "@/components/Dashboard"

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
