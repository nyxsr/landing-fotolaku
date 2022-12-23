import { AnimatePresence } from "framer-motion"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import Landing from "./pages/landing/landing"
import ModelDetails from "./pages/model/model"

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
      <Route path="/model/:id" element={<ModelDetails/>}/>
    </Routes>
  </AnimatePresence>
  )
}

export default App
