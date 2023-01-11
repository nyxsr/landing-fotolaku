import lozad from "lozad";
import React, { useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { BTSTemporary, BTSTemporary2, IconLeft, IconMiddle, IconRight, ThumbnailBTS } from "../../assets/manage";
import { motion } from "framer-motion";
import { DataLink } from "../../data/data";
import { useLocation } from "react-router-dom";

function Behind() {
  const location = useLocation();
  const path = location.pathname.split('/');
  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, []);
  return (
    <>
      <section className="flex flex-col relative py-10 gap-4 px-5 z-10">
        <p className="text-center text-xl">
        Banyak toko udah jadi <b>brand keren</b> dengan foto produk berkualitas! <b>kamu kapan</b> ?
        </p>
        <div className="flex items-center justify-center -my-8">
          <img src={IconLeft} alt="" />
          <img src={IconMiddle} alt="" />
          <img src={IconRight} alt="" />
        </div>
        <motion.div
          whileTap={{ scale: 0.8, transition: { type: "spring", bounce: 0.6 } }}
          onClick={() => {window.open(path[1] === 'tiktok' ? DataLink.WhatsappAlter : DataLink.Whatsapp,'_blank');fbq('track','Lead')}}
          className="flex gap-2 py-5 font-bold shadow-2xl text-xl text-white bg-green-500 justify-center w-full"
        >
          <BsWhatsapp size={30} />
          <button>Konsultasi Sekarang!</button>
        </motion.div>
        <p className="text-sm text-center text-[#736f6f]">
          Harga untuk UMKM! Jangan ragu konsultasi sekarang.
        </p>
      </section>
      <section className="pt-10">
        <h1 className="px-6 text-2xl font-semibold">BEHIND THE SCENES</h1>
        <div className="w-screen pt-5">
          <video
            autoPlay
            muted
            loop
            playsInline
            data-poster={ThumbnailBTS}
            width="400"
            height="254"
            className="lozad w-full object-cover"
          >
            <source data-src={BTSTemporary} type="video/webm" />
            <source data-src={BTSTemporary2} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}

export default Behind;
