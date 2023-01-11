import React from "react";
import { motion } from "framer-motion";
import { BsWhatsapp} from 'react-icons/bs'
import { DataLink } from "../../data/data";
import { useLocation } from "react-router-dom";

function FAB() {
  const location = useLocation();
  const path = location.pathname.split('/');
  return (
    <motion.div
      onClick={() =>{window.open(path[1] === 'tiktok' ? DataLink.WhatsappAlter : DataLink.Whatsapp,'_blank');fbq('track','Lead')}}
      animate={{
        y: [0, -10, 0],
        transition: {
          repeat: Infinity,
          duration: 1,
        },
      }}
      whileHover={{ scale: 1.3 }}
      whileTap={{
        scale: 0.8,
        transition: {
          type: "spring",
          stiffness: 180,
          damping: 5,
        },
      }}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      drag
      className="fixed flex gap-0 items-center bottom-5 right-5 z-50"
    >
      <div className="bg-white pr-8 shadow-lg -mr-5 text-[15px] py-2 px-5 rounded-full">
        <p>Konsultasi Sekarang!</p>
      </div>
      <div className="bg-[#49C858] shadow-xl text-white text-3xl py-4 px-4 rounded-full">
        <BsWhatsapp/>
      </div>
    </motion.div>
  );
}

export default FAB;
