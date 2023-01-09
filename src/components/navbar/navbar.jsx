import React from 'react'
import { Logo } from '../../assets/manage'

function Navbar() {
  return (
    <nav className='flex px-[1.32rem] py-[0.85rem] items-center'>
      <img src={Logo} className='w-[20%]' alt="" />
    </nav>
  )
}

export default Navbar
