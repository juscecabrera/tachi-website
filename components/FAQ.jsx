'use client';

import { useState } from "react";
import { copy } from "@/assets/copy";

import Image from "next/image"
import plus from '../assets/svg/plus.svg'
import minus from '../assets/svg/minus.svg'

const FAQSection = ({ q, a }) => { 
  const [open, setOpen] = useState('')

  return (
    //arreglar animacion
    //desarrollar los media queries
    <div onClick={() => setOpen(prev => !prev)} className={`flex flex-col justify-start col-start-2 col-end-12 hover:cursor-pointer border-t-black border-t-2 last:border-b-2 last:border-b-black`}>
      
      <div className={`flex py-4 justify-between items-center`}>
        <p className='text-lg 2xl:text-xl'>{q}</p>
        {open
        ? <Image src={minus} width={25} height={25} alt="minus logo"/>  
        : <Image src={plus}  width={25} height={25} alt="plus logo" /> 
        }

      </div>

      {open 
      ?
      <div>
         <p className={`${open ? 'pt-4 pb-6' : ''} text-base 2xl:text-lg`}>{a}</p>
      </div>
      : ''
      }
      
      
    </div>
  )
}

const FAQ = () => {
  return (
    <section className='grid grid-cols-12 grid-rows-1 gap-x-5 gap-y-0 mt-10 bg-white'>
      <h2 className='font-bold xl:text-5xl text-2xl sm:text-[40px] xl:leading-[60px] mb-6 col-start-2 col-end-12 flex justify-center items-center lg:justify-start lg:text-[50px] lg:mb-10'>Preguntas Frecuentes<div className='bg-primary xl:h-1/2 w-full h-6 ml-3 sm:w-[102px] lg:w-[328px] xl:w-[547.96px]'></div></h2>
      
      <div className="col-span-full grid grid-cols-12">
        <FAQSection q={copy.faqQ[0]} a={copy.faqA[0]}/>
        {/* <FAQSection q={copy.faqQ[1]} a={copy.faqA[1]}/> */}
        <FAQSection q={copy.faqQ[2]} a={copy.faqA[2]}/>
        <FAQSection q={copy.faqQ[3]} a={copy.faqA[3]}/>
        <FAQSection q={copy.faqQ[4]} a={copy.faqA[4]}/>

      </div>
    </section>
  )
}

export default FAQ