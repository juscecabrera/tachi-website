'use client';

import { useState } from "react";

import Image from "next/image"
import plus from '../assets/svg/plus.svg'
import minus from '../assets/svg/minus.svg'

const FAQSection = ({ text }) => { 
  const [open, setOpen] = useState('')

  return (
    //arreglar animacion
    //desarrollar los media queries
    <div onClick={() => setOpen(prev => !prev)} className={`flex flex-col justify-start col-start-2 col-end-12 hover:cursor-pointer border-t-black border-t-2 last:border-b-2 last:border-b-black`}>
      
      <div className={`flex py-4 justify-between items-center`}>
        <p className='text-lg'>{text}</p>
        {open
        ? <Image src={minus} width={25} height={25}/>  
        : <Image src={plus}  width={25} height={25}/> 
        }

      </div>

      {open 
      ?
      <div>
         <p className={`${open ? 'pt-4 pb-6' : ''} text-base`}>Hacemos entregas a todo Lima Metropolitana y el costo varía según la zona!</p>
      </div>
      : ''
      }
      
      
    </div>
  )
}

const FAQ = () => {
  return (
    <section className='grid grid-cols-12 grid-rows-1 gap-x-5 gap-y-0 mt-10'>
      <h2 className='font-bold xl:text-5xl text-2xl sm:text-[40px] xl:leading-[60px] mb-6 col-start-2 col-end-12 flex justify-center items-center lg:justify-start lg:text-[50px] lg:mb-10'>Preguntas Frecuentes<div className='bg-[#038FD9] xl:h-1/2 w-full h-6 ml-3 sm:w-[102px] lg:w-[328px] xl:w-[547.96px]'></div></h2>
      
      <div className="col-span-full grid grid-cols-12">
        <FAQSection text={'¿Cuál es la zona de delivery?'} />
        <FAQSection text={'¿Cuál es la zona de delivery?'} />
        <FAQSection text={'¿Cuál es la zona de delivery?'} />
        <FAQSection text={'¿Cuál es la zona de delivery?'} />
        <FAQSection text={'¿Cuál es la zona de delivery?'} />

      </div>
    </section>
  )
}

export default FAQ