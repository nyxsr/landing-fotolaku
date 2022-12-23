import { AnimatePresence } from "framer-motion"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import Landing from "./pages/landing/landing"

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes/>
    </BrowserRouter>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return(
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      //* Main Page Path
      <Route path='/' element={<Navigate to='/landing'/>} />

      //* Registered Path
      <Route path="/landing" element={<Landing/>}/>
    </Routes>
  </AnimatePresence>
  )
}

export default App
