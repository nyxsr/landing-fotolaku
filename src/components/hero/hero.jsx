import React from "react";
import {FaInstagram, FaTiktok} from 'react-icons/fa'
import { ImageHero } from "../../assets/manage";

function Hero() {
  return (
    <>
    <section className="px-[1.32rem]">
      <h1 className="text-2xl font-semibold">
        Urus foto{" "}
        <div className="relative inline-block w-fit">
          produk dari rumah
          <div className="absolute bottom-0 bg-[#FD8703] w-full h-1/2 px-1 -z-10"></div>
        </div>
        , Fotolaku tahu apa yang brandmu{" "}
        <div className="relative inline-block w-fit">
          butuhkan
          <div className="absolute bottom-0 bg-[#FD8703] w-full h-1/2 px-1 -z-10"></div>
        </div>
        .
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
    <img src={ImageHero} className='mt-14 w-full h-full object-fill' loading="lazy" alt="" />
    </>
  );
}

export default Hero;
