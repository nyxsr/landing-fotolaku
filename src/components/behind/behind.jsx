import lozad from 'lozad'
import React, { useEffect } from 'react'
import { BTSTemporary, ThumbnailBTS } from '../../assets/manage'

function Behind() {
  useEffect(()=>{
    const observer = lozad();
    observer.observe();
  },[])
  return (
    <section className='pt-10'>
      <h1 className='px-6 text-2xl font-semibold'>BEHIND THE SCENES</h1>
      <div className='w-screen pt-5'>
        <video autoPlay muted loop playsInline data-poster={ThumbnailBTS} width='400' height='254' className='lozad w-full object-cover'>
            <source data-src={BTSTemporary} type='video/webm' />
        </video>
      </div>
    </section>
  )
}

export default Behind
