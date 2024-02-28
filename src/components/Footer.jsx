import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function Footer() {
  return (
    <section className=' max-w-7xl mx-auto'>
      <div className=' w-full flex flex-col md:flex-row xl:flex-row justify-center items-center gap-8 xl:gap-28 py-8 text-white'>
        <div className=' flex flex-row justify-center items-center gap-1'>
          <div className=' bg-white p-2 rounded-full'>
            <BsFillTelephoneFill className=' text-red-500' />
          </div>
          <span>Toll free 1800 200 1234</span>
        </div>
        <div className=' flex flex-row justify-center items-center gap-1'>
          <FaFacebook className=' h-8 w-8' />
          <span>www.facebook.com/cripumps</span>
        </div>
        <div className=' flex flex-row justify-center items-center gap-1'>
          <TbWorld className=' h-8 w-8' />
          <span>www.crigroups.com</span>
        </div>
      </div>
    </section>
  )
}
