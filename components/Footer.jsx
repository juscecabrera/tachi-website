import React from 'react'
import Image from 'next/image'
import tachiLogo from '../assets/svg/tachiLogo.svg'
import igLogo from '../assets/svg/igLogo.svg';
import wspLogo from '../assets/svg/wspLogo.svg'

const Footer = () => {
  const wspLink = process.env.NEXT_PUBLIC_WHATSAPP_LINK

  return (
    // bg-[#F0E8E3]
    <footer className='pt-12 xl:pt-6 xl:grid-rows-1 grid grid-cols-12 grid-rows-1 sm:grid-rows-2 xl:gap-x-5 gap-x-1 gap-y-0 lg:gap-x-5 bg-white'> {/*  xl:h-[400px] h-[678px]*/}
      <div className='col-start-2 xl:col-end-5 sm:col-end-7 sm:row-span-full col-end-12 xl:block flex justify-center sm:items-start items-center flex-col pb-4'>
        <Image src={tachiLogo} className='' alt='tachilogo'/>
        <p className='xl:text-lg my-6 sm:mt-8'>Tachi Galletas y Tortas Personalizadas <br /> Desarrollado por Musa Media</p>
        
        <div className='flex gap-6'>
          <a href={wspLink} target='blank'>
            <Image src={wspLogo} alt='wsplogo' />
          </a>
          
          <a href="https://www.instagram.com/galletas_tachi/" target='blank'>
            <Image src={igLogo} alt='iglogo'/>
          </a>

        </div>
      </div>

      {/* Menu */}
      <div className='xl:col-start-6 xl:col-end-7 col-start-1 col-end-13 text-center py-3 sm:col-start-7 sm:col-end-10 sm:row-start-1 sm:text-start lg:py-0'>
        <h3 className='font-bold xl:text-lg'>Menu</h3>
        <ul>
          <li className='xl:text-lg xl:my-6'><a href="#home">Inicio</a></li>
          <li className='xl:text-lg xl:my-6'><a href="#about">Nosotros</a></li>
          <li className='xl:text-lg xl:my-6'><a href="#contact">Contacto</a></li>
        </ul>
      </div>

      {/* Siguenos, no se muestra en mobile*/}
      <div className='xl:col-start-7 xl:col-end-8 xl:block hidden lg:block lg:col-start-8 lg:col-end-8 lg:row-start-1'>
        <h3 className='font-bold xl:text-lg'>Síguenos</h3>
        <ul>
          <li className='xl:text-lg xl:my-6'><a href="https://es-la.facebook.com/people/Galletas-Decoradas-Tachi/100028835187273/" target='blank'>Facebook</a></li>
          <li className='xl:text-lg xl:my-6'><a href="https://www.instagram.com/galletas_tachi/" target='blank'>Instagram</a></li>
        </ul>
      </div>

      {/* Contacto */}
      <div className='xl:col-start-8 xl:col-end-10 col-start-1 col-end-13 text-center py-3 sm:pt-0 sm:col-start-7 sm:col-end-10 sm:row-start-2 sm:text-start lg:col-start-9 lg:row-start-1' >  
        <h3 className='font-bold xl:text-lg'>Contacto</h3>
        <ul>
          <li className='xl:text-lg xl:my-6'><a href={wspLink} target='blank'>986 974 645</a></li>
          {/* <li className='xl:text-lg xl:my-6'>mail@gmail.com</li> */}
        </ul>
      </div>

      {/* Informacion */}
      {/* <div className='xl:col-start-10 xl:col-end-12 xl:row-start-1 col-start-1 col-end-13 text-center py-3 sm:pt-0 sm:col-start-10 sm:col-end-13 sm:row-start-2 sm:text-start lg:row-start-2 lg:col-start-7 2xl:col-start-9'>
        <h3 className='font-bold xl:text-lg'>Información</h3>
        <ul>
          <li className='xl:text-lg xl:my-6'>Preguntas frecuentes</li>
          <li className='xl:text-lg xl:my-6'>Politicas de privacidad</li>
          <li className='xl:text-lg xl:my-6'>Envios y devolucion</li>
          <li className='xl:text-lg xl:my-6'>Terminos y condiciones</li>
        </ul>
      </div> */}


      <div className='flex justify-center items-center col-start-1 col-end-13 text-center border-t-[rgba(0,0,0,0.1)] border-t-2 h-14'>
        <h3 className='xl:text-[15px] text-xs'>2024 Tachi Galletas Decorativas - Todos los derechos reservados</h3>
      </div>
      {/* <div className='col-start-1 col-end-13 row-start-2 row-end-2 '></div> */}
    </footer>
  )
}

export default Footer