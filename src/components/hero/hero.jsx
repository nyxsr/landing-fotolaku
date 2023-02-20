import React from "react";
import { ImageHero } from "../../assets/manage";
import { motion } from "framer-motion";
import { BsWhatsapp} from 'react-icons/bs'
import { DataLink } from "../../data/data";
import { useLocation } from "react-router-dom";

function Hero() {
  const location = useLocation();
  const path = location.pathname.split('/');
  return (
    <>
    <section className="px-[1.32rem] pt-4 pb-8 bg-[#eceaea]">
      <h1 className="text-[22px] font-semibold">
        <motion.span initial={{ opacity:0 }} animate={{ opacity:1, transition:{ delay:.5, duration:.5} }}>
        Urus foto produk<motion.span className="text-[#fd8703] font-bold w-fit"> dari rumah</motion.span>
        </motion.span>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1, transition:{ delay:1, duration:.5} }}>
        Fotolaku tahu apa yang <div>brand kamu butuhkan.</div>
        </motion.div>
      </h1>
      <div className="pt-4 flex flex-col gap-2">
        <button onClick={()=>{window.open(path[1] === 'tiktok' ? DataLink.WhatsappAlter : DataLink.Whatsapp,'_blank')}} className="bg-green-500 shadow-lg w-fit py-3 px-4 text-lg rounded-xl text-white font-semibold flex items-center gap-3">
        <BsWhatsapp/>
        <p className="text-[14px]">Hubungi Konsultan kami</p></button>
        <p className="text-[#747474] px-1 text-sm">dapatkan gratis konsultasi foto produk !</p>
      </div>
    </section>
    <div className="h-[16rem] w-screen">
    <img src={ImageHero} className='w-full h-full object-cover' loading="lazy" alt="" />
    </div>
    </>
  );
}

export default Hero;
