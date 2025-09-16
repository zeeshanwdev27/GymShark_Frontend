import React from 'react'
import heroSection from '../../../assets/Gymshark/heroSection.avif'
import { Button } from "@/components/ui/button"

function HeroSection() {
  return (
    <div
      className="relative  flex items-center h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroSection})` }}
    >

      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-transparent"></div> */}
      <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-black/65 to-transparent"></div>

      <div className='relative flex flex-col justify-center gap-6 px-14 '>
      <h1 className="text-white text-[50px] font-bold leading-tight"> LAYERING SEASON <span className="block">STARTS NOW</span></h1>

      <p className='text-white text-[16px]'>Comfortable, versatile layers that’ll keep you moving this season.</p>
      <div className='flex gap-5'>
          <Button variant="secondary" className="font-bold rounded-2xl py-5.5 px-8 cursor-pointer">SHOP WOMEN</Button>
          <Button variant="secondary" className="font-bold rounded-2xl py-5.5 px-8 cursor-pointer">SHOP MEN</Button>
        
      </div>

      </div>
    </div>
  )
}

export default HeroSection
