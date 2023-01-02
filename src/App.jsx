import { AnimatePresence } from "framer-motion"
import { lazy } from "react"
import { isMobile } from "react-device-detect"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import Landing from "./pages/landing/landing"

const Details = lazy(()=>import('./pages/details/details'))
const ModelDetails = lazy(()=> import('./pages/model/model'))

function App() {
  if (!isMobile) {
    return(
        <section className="flex flex-col justify-center items-center h-screen gap-5">
          <p className="text-3xl">Silahkan Buka Di Handphone anda ya</p>
        </section>
    )
}
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
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/model/:id" element={<ModelDetails/>}/>
    </Routes>
  </AnimatePresence>
  )
}

export default App
