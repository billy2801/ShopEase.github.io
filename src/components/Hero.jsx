import React from 'react'
import heroBackground from '../assets/hero-background.png'

const Hero = () => {
  return (
    <section
      className=" relative bg-top bg-cover h-[calc(100vh-64px)]  bg-no-repeat flex items-center justify-center  overflow-hidden"
      style={{backgroundImage: `url(${heroBackground})` }}

     
    >

      <div className=' w-full max-w-7xl mx-auto text-white px-6  '>
        <div className=' max-w-2xl py-24 md:py-32 '>
          <p className='text-md uppercase font-medium tracking-[0.25rem] mb-5  '>NEW COLLECTION . 2026</p>
          <h1 className='mt-5 text-5xl sm:text-6xl md:text-7xl prata-regular font-semibold '>Designed for everyday life.</h1>
          <p className='max-w-md mt-7 text-sm sm:text-base leading-7'>Thoughtfully curated pieces that bring together contemporary design, comfort, and effortless style.</p>
          <a className='cursor-pointer group inline-flex gap-2 mt-7 bg-white text-sm items-center p-2 pl-5 text-zinc-800 rounded-full'> Explore Collection <span class="relative flex size-6 items-center justify-center overflow-hidden rounded-full bg-zinc-800 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right absolute size-4 transition-transform duration-300 ease-out group-hover:translate-x-8" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right absolute size-4 -translate-x-8 transition-transform duration-300 ease-out group-hover:translate-x-0" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span></a>
        </div>

      </div>
      
    </section>
  )
}

export default Hero
