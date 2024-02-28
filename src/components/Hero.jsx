import React from 'react'
import trophy from "/1.png"
import achievement from "/2.png"

export default function Hero() {
  return (
    <section className=' w-[90%] xl:max-w-7xl mx-auto'>
      <div className=' w-full flex flex-col xl:flex-row justify-center items-center'>
        <div className=' w-[35%] flex justify-center items-center '>
          <img src={trophy} alt="" />
        </div>
        <div className=' w-full xl:w-[65%] font-medium'>
          <div className=' font-bold'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 FOR THE 4TH TIME.</div>
          <ul className=' py-4 px-8'>
            <li className='list-disc'>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save enery</li>
            <li className='list-disc'>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limeted) to replace the old inefficient pumps with 5 star rated enery efficient smart pumps with LoT enabled control panel.</li>
          </ul>
          <img src={achievement} alt="" />
          <div className=' font-medium'>Government of India has awarded the <span className=' font-bold'>"National Energy Conservation Award 2018".</span> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group recived the award from Smt. sumitra Mahajan, Speaker of Lok sabha & shri. Raj Kumar Singh. Honorable Minister of State.</div>
        </div>
      </div>
    </section>
  )
}
