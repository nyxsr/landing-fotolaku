import React from "react";
import {FaInstagram, FaTiktok} from 'react-icons/fa'
import { ImageHero } from "../../assets/manage";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
    <section className="px-[1.32rem]">
      <h1 className="text-2xl font-semibold">
        <motion.span initial={{ opacity:0 }} animate={{ opacity:1, transition:{ delay:.5, duration:.5} }}>
        Urus foto <motion.span className="bg-[#fd8703] text-white px-1">produk dari rumah</motion.span>
        </motion.span>
        <motion.span  initial={{ opacity:0 }} animate={{ opacity:1, transition:{ delay:1, duration:.5} }}>
        , Fotolaku tahu apa yang brandmu <motion.span className="bg-[#fd8703] text-white px-1">butuhkan.</motion.span>
        </motion.span>
      </h1>
      <div className="pt-10 flex flex-col gap-2">
        <button onClick={() =>
        (window.location.href = `https://wa.me/6281394683395?text=${encodeURIComponent(
          "Halo semuanya!"
        )}`)
      } className="bg-[#fd8703] w-fit py-3 px-[2.657rem] rounded-xl text-white font-semibold">Let's Talk</button>
        <p className="text-[#747474] text-sm">with our creative consultant</p>
      </div>
      <div className="flex gap-[0.875rem] pt-4">
        <div className="bg-[#FEF0CD] text-2xl text-[#fd8703] py-2 px-2 rounded-full" onClick={()=>window.location.href = 'https://www.instagram.com/unmute.visual/'}>
            <FaInstagram/>
        </div>
        <div className="bg-[#FEF0CD] text-2xl text-[#fd8703] py-2 px-2 rounded-full" onClick={()=>window.location.href = 'https://www.tiktok.com/@foto.laku?_t=8YO2h0zNG7u&_r=1'}>
            <FaTiktok/>
        </div>
      </div>
    </section>
    <img src={ImageHero} className='mt-8 w-full h-full object-fill' loading="lazy" alt="" />
    </>
  );
}

export default Hero;
