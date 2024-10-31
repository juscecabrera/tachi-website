'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import tachiLogo from '../assets/svg/tachiLogo.svg'
import hamburger from '../assets/svg/hamburger.svg'
import plusWhite from '../assets/svg/plusWhite.svg'

const Nav = () => {
  const [hamburgerView, setHamburgerView] = useState(false)


  return (
    <nav className='text-white bg-gradient-to-b bg-yellow-400 grid grid-cols-12 grid-rows-1 gap-1 lg:gap-5 font-teachers'>
        <div className='col-span-full row-1 grid grid-cols-12 gap-1 lg:gap-5 py-6 lg:py-3 lg:h-[188px]'>
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
            ? <div className='lg:hidden bg-[rgba(0,0,0,0.6)] h-screen fixed top-0 w-[60%] left-[40%] sm:w-[30%] sm:left-[70%]'>  
                <ul className='mt-20 flex flex-col justify-center items-center gap-14 text-2xl'>
                    <li className=''><Image src={plusWhite} className='rotate-45 w-8 h-8' onClick={() => setHamburgerView(false)}/></li>
                    <li className=''><Link href="/" onClick={() => setHamburgerView(false)}>Inicio</Link></li>
                    <li className=''><a href="/#about" onClick={() => setHamburgerView(false)}>Nosotros</a></li>
                    <li className=''><Link href="/productos" onClick={() => setHamburgerView(false)}>Productos</Link></li>
                    <li className=''><a href="/#contact" onClick={() => setHamburgerView(false)}>Contacto</a></li>
                </ul>
                </div>
            
            : ''
            }
        

            <div className='lg:flex hidden justify-start lg:mb-10 items-center lg:col-start-6 lg:col-end-13'>
                <ul className='lg:flex 2xl:flex flex-row gap-40 lg:gap-14 mr-28 items-center col-start-7 col-end-11 font-regular text-xl'>
                    <li className='lg:text-2xl'><Link href="/">Inicio</Link></li>
                  <li className='lg:text-2xl'><a href="/#about">Nosotros</a></li>
                    <li className='lg:text-2xl'><Link href="/productos">Productos</Link></li>
                    <li className='lg:text-2xl'><a href="/#contact">Contacto</a></li>
                </ul>

            </div>
        </div>
    </nav>
  )
}

export default Nav