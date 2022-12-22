import React from 'react'
import { Logo } from '../../assets/manage'

function Navbar() {
  return (
    <nav className='flex px-[1.32rem] py-[1.32rem]'>
      <img src={Logo} className='w-1/4' alt="" />
    </nav>
  )
}

export default Navbar
