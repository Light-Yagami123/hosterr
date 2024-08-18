import React from 'react'
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center justify-center gap-2 '>
        <img src="./assets/Logo.svg" alt="logo" />
        <button className='bg-gradient-to-r from-orange-400 to-red-400 px-2.5 py-1.5 rounded-2xl text-xs text-white font-bold '>Hoster is Hiring</button>
      </div>
      <ul className='hidden lg:flex items-center gap-20 font-lato text-xl'>
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Domain</a></li>
        <li><a href="#">Why Hosterr</a></li>
      </ul>
      <div className='hidden lg:flex gap-4 items-center'>
        <a href="#" className='font-lato text-xl'>Sign In</a>
        <button className='bg-blue-700 text-white rounded-lg p-3 hover:bg-blue-500'>Join Waitlist</button>
      </div>
      <div className='lg:hidden'>
      <FiMenu />
      </div>
    </div>
  )
}

export default Header
