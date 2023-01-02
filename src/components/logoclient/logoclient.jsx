import React from 'react'
import { DataLogoClient } from '../../data/data'
import { motion } from 'framer-motion'

function Logoclient() {
  return (
    <section className='py-[1.625rem]'>
        <p className='text-center text-xl'>Ini brand yang sudah bekerja sama dengan Fotolaku</p>
        <div className="overflow-x-hidden">
        <motion.div animate={{ x:['0%','-75%','0%'] }} transition={{type:'tween',ease:'linear', duration:60, repeat:Infinity }} className="flex px-6 flex-nowrap w-fit items-center gap-3">
          {DataLogoClient.map((v,i)=>{
            return <Logos key={i} image={v.image}/>
          })}
           {DataLogoClient.map((v,i)=>{
            return <Logos key={i} image={v.image}/>
          })}
        </motion.div>
          </div>
    </section>
  )
}

function Logos(props) {
  return(
    <div className='w-32'>
      <img src={props.image} loading='lazy' alt="" />
    </div>
  )
}

export default Logoclient