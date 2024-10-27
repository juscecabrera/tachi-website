'use client'

import { useState } from 'react'
import tachiLogo from '../assets/svg/tachiLogo.svg'
import heroImg from '../assets/images/heroImg.png'
import hamburger from '../assets/svg/hamburger.svg'
import Image from 'next/image'
import plusWhite from '../assets/svg/plusWhite.svg'


const Hero = () => {
  const [hamburgerView, setHamburgerView] = useState(false)

  
  const wspLink = process.env.NEXT_PUBLIC_WHATSAPP_LINK
  
  const handleClick = () => {
    window.open(wspLink)
  }

  return (
    //el bg debe ser el svg con la curva abajo
    // text-white bg-gradient-to-b from-primary to-[#066698] para el fondo azul. Probando fondo amarillo
    //arreglar el breakpoint LG
    <section id='home' className='text-white bg-gradient-to-b bg-yellow-400 grid grid-cols-12 grid-rows-1 gap-1 lg:gap-5 font-teachers pb-7 lg:pb-12'>
      <nav className='col-span-full row-1 grid grid-cols-12 gap-1 lg:gap-5 py-6 lg:py-3 lg:h-[188px]'>
          <Image 
            className='col-start-2 col-end-5 w-[62px] h-[62px] sm:w-[67px] sm:h-[67px] lg:w-36 lg:h-36'
            src={tachiLogo}
            alt='tachilogo'
          />

        
        {/* aparece en xs, sm y md */}
        
        
        <div className='col-start-10 col-end-12 flex justify-center items-center lg:hidden'>
          <Image 
            src={hamburger}
            width={48}
            className='col-start-10 col-end-12'
            alt='hamburger'
            onClick={() => setHamburgerView(prev => !prev)}
          />
        </div>

        {hamburgerView 
        ? <div className='lg:hidden bg-[rgba(0,0,0,0.6)] h-screen absolute top-0 w-[60%] left-[40%] sm:w-[30%] sm:left-[70%]'>  
            <ul className='mt-20 flex flex-col justify-center items-center gap-14 text-2xl'>
              <li className=''><Image src={plusWhite} className='rotate-45 w-8 h-8' onClick={() => setHamburgerView(false)}/></li>
              <li className=''><a href="#home" onClick={() => setHamburgerView(false)}>Inicio</a></li>
              <li className=''><a href="#about" onClick={() => setHamburgerView(false)}>Nosotros</a></li>
              <li className=''><a href="#contact" onClick={() => setHamburgerView(false)}>Contacto</a></li>
            </ul>
          </div>
        
        : ''
        }
        

        <div className='lg:flex hidden justify-start lg:mb-10 items-center lg:col-start-7 lg:col-end-13'>
          <ul className='lg:flex 2xl:flex flex-row gap-40 lg:gap-20 mr-28 items-center col-start-7 col-end-11 font-regular text-xl'>
            <li className='lg:text-2xl'><a href="#home">Inicio</a></li>
            <li className='lg:text-2xl'><a href="#about">Nosotros</a></li>
            <li className='lg:text-2xl'><a href="#contact">Contacto</a></li>
          </ul>

        </div>
      </nav>

    {/* en 2xl el h1 es 7xl, el p es 2xl */}
    <div className='col-span-full row-start-2 row-end-2 grid grid-cols-12 gap-1 lg:col-start-2 lg:col-end-9' >
      <h1 className='lg:text-7xl 2xl:text-7xl text-[32px] font-bold 2xl:leading-[86px] leading-9 col-start-2 col-end-11 lg:col-span-full sm:text-5xl lg:leading-[86px] xl:mt-3'>Tortas y Galletas Personalizadas</h1>
      <p className='2xl:text-2xl 2xl:col-start-1 2xl:col-end-7 text-lg sm:text-2xl mb-6 mt-3 col-start-2 col-end-12 lg:col-start-1 lg:col-end-10 leading-6 xl:mb-14'>Mejoramos tus celebraciones con postres confeccionados para la ocasión.</p>
      <button 
        onClick={() => handleClick()}
        className='orange-button text-white w-40 sm:w-[211px] h-[51px] sm:h-[60px] text-lg col-start-4 col-end-10 sm:col-start-3 lg:col-start-3 lg:text-2xl lg:w- [224px] lg:h-[76px]'>
        Pide aquí
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