import lozad from 'lozad'
import React, { useEffect } from 'react'
import { BsWhatsapp } from 'react-icons/bs';
import { BTSTemporary, ThumbnailBTS } from '../../assets/manage'
import { motion } from 'framer-motion';

function Behind() {
  useEffect(()=>{
    const observer = lozad();
    observer.observe();
  },[])
  return (
    <>
     <section className="flex flex-col relative py-10 gap-4 px-5 z-10">
      {/* <h1 className="uppercase font-bold text-2xl">Tertarik menggunakan jasa kami ?</h1>
      <p className="">Kami pastikan bagaimana kami merubah ide anda menjadi menakjubkan</p>
      <a href="https://wa.me/081394683395" className="bg-[#FD8703] text-white px-8 py-2 w-fit rounded-lg">Let's Talk</a> */}
        <motion.div
        whileTap={{ scale:.8, transition:{type:'spring',bounce:.6} }}
        onClick={()=>window.location.href = 'https://split.to/igbio'}
        className="flex gap-2 py-5 font-bold text-xl text-white bg-green-500 justify-center w-full"
      >
        <BsWhatsapp size={30} />
        <button>Konsultasi Sekarang!</button>
      </motion.div>
    </section>
    <section className='pt-10'>
      <h1 className='px-6 text-2xl font-semibold'>BEHIND THE SCENES</h1>
      <div className='w-screen pt-5'>
        <video autoPlay muted loop playsInline data-poster={ThumbnailBTS} width='400' height='254' className='lozad w-full object-cover'>
            <source data-src={BTSTemporary} type='video/webm' />
        </video>
      </div>
    </section>
    </>
  )
}

export default Behind
