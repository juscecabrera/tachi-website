'use client'

import heroImg from '../assets/images/heroImg.png'
import Image from 'next/image'


const Hero = () => {
  const wspLink = process.env.NEXT_PUBLIC_WHATSAPP_LINK
  
  const handleClick = () => {
    window.open(wspLink)
  }

  return (
    //el bg debe ser el svg con la curva abajo
    <section id='home' className='text-white bg-gradient-to-b bg-yellow-400 grid grid-cols-12 grid-rows-1 gap-1 lg:gap-5 font-teachers py-7 lg:pb-12'>

    {/* en 2xl el h1 es 7xl, el p es 2xl */}
    <div className='col-span-full row-start-2 row-end-2 grid grid-cols-12 gap-1 lg:col-start-2 lg:col-end-9' >
      <h1 className='lg:text-7xl 2xl:text-7xl text-[32px] font-bold 2xl:leading-[86px] leading-9 col-start-2 col-end-11 lg:col-span-full sm:text-5xl lg:leading-[86px] xl:mt-3'>Tortas y Galletas Personalizadas</h1>
      <p className='2xl:text-2xl 2xl:col-start-1 2xl:col-end-7 text-lg sm:text-2xl mb-6 mt-3 col-start-2 col-end-12 lg:col-start-1 lg:col-end-10 leading-6 xl:mb-14'>Mejoramos tus celebraciones con postres confeccionados para la ocasión.</p>
      <button 
        onClick={() => handleClick()}
        className='orange-button text-white w-40 sm:w-[211px] h-[51px] sm:h-[60px] text-lg col-start-4 col-end-10 sm:col-start-3 lg:col-start-3 lg:text-2xl lg:w- [224px] lg:h-[76px]'>
        <a href={wspLink}>Pide aquí</a>
        
      </button>
    </div>
    
    {/* En mobile no existe */}
    {/* w606 y h-621 */}
    <div className='lg:block col-start-7 col-end-12 row-start-2 row-end-4 hidden'>
      <Image 
        src={heroImg}
        className='absolute lg:w-2/5 lg:h-auto lg:left-[60%] lg:top-[115px] xl:w-[606px] xl:h-[621px] xl:top-[90px] xl:left-[640px]  2xl:left-[850px] 2xl:top-[110px] 2xl:w-[700px] 2xl:h-[720px]'
        alt='heroimage'
      />
    </div>

    </section>
  )
}

export default Hero