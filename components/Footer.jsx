import React from 'react'
import Image from 'next/image'
import tachiLogo from '../assets/svg/tachiLogo.svg'
import igLogo from '../assets/svg/igLogo.svg';
import wspLogo from '../assets/svg/wspLogo.svg'

const Footer = () => {
  return (
    <footer className='pt-12 xl:pt-6 xl:grid-rows-1 grid grid-cols-12 grid-rows-1 sm:grid-rows-2 xl:gap-x-5 gap-x-1 gap-y-0 lg:gap-x-5 bg-[#F0E8E3]'> {/*  xl:h-[400px] h-[678px]*/}
      <div className='col-start-2 xl:col-end-5 sm:col-end-7 sm:row-span-full col-end-12 xl:block flex justify-center sm:items-start items-center flex-col pb-4'>
        <Image src={tachiLogo}/>
        <p className='xl:text-lg my-6 sm:mt-8'>Lorem ipsum dolor sit atmet consectetur. Imperdiet quis neque eget tellus</p>
        
        <div className='flex gap-6'>
          <Image src={wspLogo}/>
          <Image src={igLogo}/>

        </div>
      </div>

      {/* Menu */}
      <div className='xl:col-start-6 xl:col-end-7 col-start-1 col-end-13 text-center py-3 sm:col-start-7 sm:col-end-10 sm:row-start-1 sm:text-start lg:py-0'>
        <h3 className='font-bold xl:text-lg'>Menu</h3>
        <ul>
          <li className='xl:text-lg xl:my-6'>Inicio</li>
          <li className='xl:text-lg xl:my-6'>Nosotros</li>
          <li className='xl:text-lg xl:my-6'>Contacto</li>
        </ul>
      </div>

      {/* Siguenos, no se muestra en mobile*/}
      <div className='xl:col-start-7 xl:col-end-8 xl:block hidden lg:block lg:col-start-8 lg:col-end-8 lg:row-start-1'>
        <h3 className='font-bold xl:text-lg'>Síguenos</h3>
        <ul>
          <li className='xl:text-lg xl:my-6'>Facebook</li>
          <li className='xl:text-lg xl:my-6'>Instagram</li>
        </ul>
      </div>

      {/* Contacto */}
      <div className='xl:col-start-8 xl:col-end-10 col-start-1 col-end-13 text-center py-3 sm:pt-0 sm:col-start-7 sm:col-end-10 sm:row-start-2 sm:text-start lg:col-start-9 lg:row-start-1' >  
        <h3 className='font-bold xl:text-lg'>Contacto</h3>
        <ul>
          <li className='xl:text-lg xl:my-6'>999 999 999</li>
          <li className='xl:text-lg xl:my-6'>mail@gmail.com</li>
        </ul>
      </div>

      {/* Informacion */}
      <div className='xl:col-start-10 xl:col-end-12 xl:row-start-1 col-start-1 col-end-13 text-center py-3 sm:pt-0 sm:col-start-10 sm:col-end-13 sm:row-start-2 sm:text-start lg:row-start-2 lg:col-start-7 2xl:col-start-9'>
        <h3 className='font-bold xl:text-lg'>Información</h3>
        <ul>
          <li className='xl:text-lg xl:my-6'>Preguntas frecuentes</li>
          <li className='xl:text-lg xl:my-6'>Politicas de privacidad</li>
          <li className='xl:text-lg xl:my-6'>Envios y devolucion</li>
          <li className='xl:text-lg xl:my-6'>Terminos y condiciones</li>
        </ul>
      </div>


      <div className='flex justify-center items-center col-start-1 col-end-13 text-center border-t-[rgba(0,0,0,0.1)] border-t-2 h-14'>
        <h3 className='xl:text-[15px] text-xs'>2024 Tachi Galletas Decorativas - Todos los derechos reservados</h3>
      </div>
      {/* <div className='col-start-1 col-end-13 row-start-2 row-end-2 '></div> */}
    </footer>
  )
}

export default Footer