import tachiLogo from '../assets/svg/tachiLogo.svg'
import heroImg from '../assets/images/heroImg.png'
import hamburger from '../assets/svg/hamburger.svg'
import Image from 'next/image'

const Hero = () => {
  return (
    //el bg debe ser el svg con la curva abajo
    //los cols en mobile tienen gap-1, en 1440 tienen gap-5
    <section className='text-white bg-gradient-to-b from-[#038fd9] to-[#066698] grid grid-cols-12 grid-rows-1 gap-1 lg:gap-5 font-teachers pb-7 lg:pb-12'>
      <nav className='col-span-full row-1 grid grid-cols-12 gap-1 lg:gap-5 py-6 lg:py-3 lg:h-[188px]'>
          <Image 
            className='col-start-2 col-end-5 w-[62px] h-[62px] sm:w-[67px] sm:h-[67px] lg:w-36 lg:h-36'
            src={tachiLogo}
          />

        
        <div className='col-start-10 col-end-12 flex justify-center items-center lg:hidden'>
          <Image 
            src={hamburger}
            width={48}
            className='col-start-10 col-end-12'
          />

        </div>

        <div className='lg:flex justify-start lg:mb-10 items-center lg:col-start-7 lg:col-end-13'>
          <ul className='lg:flex hidden 2xl:flex flex-row gap-40 lg:gap-20 mr-28 items-center col-start-7 col-end-11 font-regular text-xl'>
            <li className='lg:text-2xl'>Inicio</li>
            <li className='lg:text-2xl'>Nosotros</li>
            <li className='lg:text-2xl'>Contacto</li>
          </ul>

        </div>
      </nav>

    {/* en 2xl el h1 es 7xl, el p es 2xl */}
    <div className='col-span-full row-start-2 row-end-2 grid grid-cols-12 gap-1 lg:col-start-2 lg:col-end-9' >
      <h1 className='lg:text-7xl 2xl:text-7xl text-[32px] font-bold 2xl:leading-[86px] leading-9 col-start-2 col-end-11 lg:col-span-full sm:text-5xl lg:leading-[86px] xl:mt-3'>Tortas y Galletas Personalizadas</h1>
      <p className='2xl:text-2xl 2xl:col-start-1 2xl:col-end-7 text-lg sm:text-2xl mb-6 mt-3 col-start-2 col-end-12 lg:col-start-1 lg:col-end-10 leading-6 xl:mb-14'>Mejoramos tus celebraciones con postres confeccionados para la ocasión.</p>
      <button className='orange-button w-40 sm:w-[211px] h-[51px] sm:h-[60px] text-lg col-start-4 col-end-10 sm:col-start-3 lg:col-start-3 lg:text-2xl lg:w-[224px] lg:h-[76px]'>Pide aquí</button>
    </div>
    
    {/* En mobile no existe */}
    <div className='lg:block col-start-7 col-end-12 row-start-2 row-end-4 hidden'>
      <Image 
        src={heroImg}
        className='2xl:w-[606px] 2xl:h-[621px] 2xl:left-[900px] 2xl:top-[125px] 2xl:block lg:w-[606px] lg:h-[621px] lg:left-[619px] lg:top-[115px] xl:top-[90px] xl:left-[640px] absolute'
      />
    </div>

    </section>
  )
}

export default Hero