import React from 'react'
import tools from '/3.png'

export default function Parts() {
  const foot = [
    { name: "chemicals & Process", bar: " | " },
    { name: "POWER", bar: " | " },
    { name: "WATER & WASTE WATER", bar: " | " },
    { name: "OIL & GAS", bar: " | " },
    { name: "PHARMA", bar: " | " },
    { name: "SUGARS & DISTILLERIES", bar: " | " },
    { name: "PAPER & PULP", bar: " | " },
    { name: "MARINE & DEFENCE", bar: " | " },
    { name: "METAL & MINING", bar: " | " },
    { name: "FOOD & BEVERAGE", bar: " | " },
    { name: "PETROCHEMIVAL & REFINERIES", bar: " | " },
    { name: "SOLAR", bar: " | " },
    { name: "BUILDING", bar: " | " },
    { name: "HVAC", bar: " | " },
    { name: "FIRE FIGHTING", bar: " | " },
    { name: "AGRICULTURE & RESIDENTIALS." },
  ]
  return (
    <section className=' w-[90%] xl:max-w-7xl mx-auto my-8 font-medium'>
      <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLON UNITS OF POWER THE NATION.</p>
      <img src={tools} alt="" />
      <div className=' text-center my-2'>Valves - Pumps - pipes - Iot Drives & Controllers - Wires & Cables - Solar System - Moters</div>
      <div className=' w-full bg-red-600 h-[2px]'></div>
      <div className=' font-bold text-center my-2'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</div>
      {/* <div className=' text-center my-2'>chemicals & Process<span className=' text-red-500'>|</span>POWER<span className=' text-red-500'>|</span>WATER & WASTE WATER<span className=' text-red-500'>|</span>OIL & GAS<span className=' text-red-500'>|</span>PHARMA<span className=' text-red-500'>|</span>SUGARS & DISTILLERIES<span className=' text-red-500'>|</span>PAPER & PULP<span className=' text-red-500'>|</span>MARINE & DEFENCE<span className=' text-red-500'>|</span>METAL & MINING<span className=' text-red-500'>|</span>FOOD & BEVERAGE<span className=' text-red-500'>|</span>PETROCHEMIVAL & REFINERIES<span className=' text-red-500'>|</span>SOLAR<span className=' text-red-500'>|</span>BUILDING<span className=' text-red-500'>|</span>HVAC<span className=' text-red-500'>|</span>FIRE FIGHTING<span className=' text-red-500'>|</span>AGRICULTURE & RESIDENTIALS.  </div> */}
      <div className=' text-center'>
        {foot.map((item) => (
          <span className=' my-2'>{item.name}<span className=' text-red-500'>{item.bar}</span></span>
        ))}
      </div>
    </section>
  )
}
