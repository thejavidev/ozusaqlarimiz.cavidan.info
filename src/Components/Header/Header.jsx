import React from 'react'
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { logo } from '../../assets/images';

const Header = () => {
  return (
    <>
      <header className='container-sm mx-auto fixed top-[5px] left-[0] right-[0] w-full '>

          <nav className='flex items-center pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-[#000] rounded-[45px] shadow-css'>
            <div className="flex items-center gap-2">
                <LazyLoadImage src={logo} className='w-[50px]' />
                <span className='text-[#fff] text-[25px] uppercase'>Usaqlarimiz</span>
            </div>
            <ul className='flex items-center w-full justify-end gap-4 pr-[30px]'>
              <li><NavLink className='text-[#fff]' to={'/'}>Ana sehife</NavLink></li>
              <li><NavLink className='text-[#fff]' to={'/about'}>Haqqimizda</NavLink></li>
              <li><NavLink className='text-[#fff]' to={'/events'}>Events</NavLink></li>
              <li><NavLink className='text-[#fff]' to={'/contact'}>Elaqe</NavLink></li>
            </ul>
          </nav>
      </header>  
    </>
  )
}

export default Header
