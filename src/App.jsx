import { AnimatePresence } from "framer-motion";
import { lazy } from "react";
import { isMobile } from "react-device-detect";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Landing from "./pages/landing/landing";
import Screenshot from "./assets/videos/Screenshot.gif";
import { Logo } from "./assets/manage";
import { BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import { DataLink } from "./data/data";

const Details = lazy(() => import("./pages/details/details"));
const ModelDetails = lazy(() => import("./pages/model/model"));

function App() {
  if (!isMobile) {

    const handleLink = (link) =>{
      window.open(link)
    }

    return (
      <section className="flex justify-center items-center h-screen gap-2 w-[65vw] mx-auto">
        <img src={Screenshot} alt="" />
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={Logo} className="w-[15rem]" alt="" />
          <p className="text-2xl text-center px-20">
            Saat ini Website Fotolaku Hanya Tersedia di Handphone anda ya!
          </p>
          <div className="flex gap-3 flex-wrap items-center justify-center">
            <motion.div onClick={()=>{handleLink(DataLink.Whatsapp);fbq('track','Lead')}} whileTap={{ scale:.8, transition:{type:'spring',bounce:.6} }} whileHover={{ scale:1.2, transition:{type:'spring',bounce:.6} }} className="flex gap-2 hover:shadow-xl hover:cursor-pointer bg-green-500 text-white py-2 px-2 w-[15rem] rounded-sm items-center justify-center">
              <BsWhatsapp size={30} />
              <p>Konsultasi Sekarang!</p>
            </motion.div>
            <motion.div onClick={()=>{handleLink(DataLink.Instagram);fbq('track','Contact')}} whileTap={{ scale:.8, transition:{type:'spring',bounce:.6} }} whileHover={{ scale:1.2, transition:{type:'spring',bounce:.6} }} className="flex gap-2 hover:shadow-xl hover:cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-2 w-[15rem] rounded-sm items-center justify-center">
              <BsInstagram size={30} />
              <p>@foto.laku</p>
            </motion.div>
            <motion.div onClick={()=>{handleLink(DataLink.Tiktok);fbq('track','Contact')}} whileTap={{ scale:.8, transition:{type:'spring',bounce:.6} }}  whileHover={{ scale:1.2, transition:{type:'spring',bounce:.6} }} className="flex gap-2 hover:shadow-xl hover:cursor-pointer bg-black text-white py-2 px-2 w-[15rem] rounded-sm items-center justify-center">
              <FaTiktok size={30} />
              <p>foto.laku</p>
            </motion.div>
            <motion.div onClick={()=>{handleLink(DataLink.Youtube);fbq('track','Contact')}} whileTap={{ scale:.8, transition:{type:'spring',bounce:.6} }} whileHover={{ scale:1.2, transition:{type:'spring',bounce:.6} }} className="flex gap-2 hover:shadow-xl hover:cursor-pointer bg-gradient-to-r from-[#c4302b] to-[#ec8e8b] text-white py-2 px-2 w-[15rem] rounded-sm items-center justify-center">
              <BsYoutube size={30} />
              <p>Fotolaku</p>
            </motion.div>
          </div>
          <p className="text-[#9d9d9d] text-sm mt-2 text-center">
        &copy; {new Date().getFullYear()} Fotolaku All Right Reserved
      </p>
        </div>
      </section>
    );
  }
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

function AnimatedRoutes() {
  const location = useLocation();  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        //* Main Page Path
        <Route path="/" element={<Navigate to="/landing" />} />
        //* Registered Path
        <Route path="/landing" element={<Landing />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/model/:id" element={<ModelDetails />} />
        //* From Tiktok Path
        <Route path="/tiktok" element={<Landing />} />
        <Route path="/details_tiktok/:id" element={<Details />} />
        <Route path="/model_tiktok/:id" element={<ModelDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
