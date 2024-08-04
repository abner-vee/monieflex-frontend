import React from 'react'
import ProfilePic from "../../assets/Ellipse.png"
import logo from "../../assets/logo.png"
import LanguageDropdown from "../Login/LanguageDropdown"


const TopSide = () => {
  return (
    <div className='bg-[#08284E] h-[80px] flex justify-between items-center'>
        <div className='flex pl-10'>
        <img className='px-5 py-3' src={logo} alt='logo' />
        <h2 className='text-[#ffffff] py-5 text-3xl '>MonieFlex</h2>
        </div>

        <div className='flex items-center px-16'>
          <LanguageDropdown />
          <h3 className='text-[#ffffff] text-xl py-10 px-3'>Help</h3>
          <img  className='px-5' src={ProfilePic} alt='picture' />
        </div>
    </div>
    
  )
}

export default TopSide