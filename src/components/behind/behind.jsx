import React from 'react'
import { BTSTemporary } from '../../assets/manage'

function Behind() {
  return (
    <section className='pt-10'>
      <h1 className='px-6 text-2xl font-semibold'>BEHIND THE SCENES</h1>
      <div className='w-screen pt-5'>
        <video autoPlay muted loop style={{ filter:'grayscale(1)' }} className='w-full object-cover'>
            <source src={BTSTemporary} />
        </video>
      </div>
    </section>
  )
}

export default Behind
