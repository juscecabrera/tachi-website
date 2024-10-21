import Image from "next/image"
import about1 from '../assets/images/about1.png'
import about2 from '../assets/images/about2.png'
import about3 from '../assets/images/about3.png'

const About = () => {
  return (
    <section className='grid grid-cols-12 grid-rows-1 gap-1 lg:gap-5 xl:gap-5 mt-5 xl:mt-10 sm:gap-y-8 ' >
      <div className="xl:col-start-1 2xl:col-start-2 col-start-1 col-end-13 grid grid-cols-12 h-16">
        <h2 className='flex justify-center items-center xl:text-5xl text-2xl sm:text-[40px] font-bold leading-[60px] mb-6 sm:mb-0 col-start-2 col-end-12  gap-3 sm:gap-2 sm:justify-start lg:text-[50px]'>Hecho con ❤️<div className='bg-[#038FD9] xl:h-1/2 w-24 sm:w-[263px] lg:w-[518px] xl:w-[700px] h-6'></div></h2>
      </div>
      

      <p className="text-base sm:text-xl xl:text-3xl xl:col-start-2 2xl:col-start-3 xl:col-end-5 col-start-2 col-end-12 sm:col-end-7 flex justify-between flex-col lg:text-3xl lg:col-end-7 lg:leading-[154%] 2xl:text-2xl gap-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra mauris mi, sed iaculis libero maximus et. Ut pharetra sem in lobortis vestibulum. Suspe potenti
        <Image 
          src={about1}
          className="hidden rounded-[20px] sm:block sm:h-[210px] sm:w-[210px] sm:shadow-xl lg:w-[374px] lg:h-[374px] xl:w-[291px] xl:h-[291px]"
        />
      </p>

      <Image 
        src={about1}
        className="hidden col-start-2 col-end-5 rounded-xl shadow-xl "
      />
      

      <div className="hidden 2xl:flex items-center justify-start col-start-5 col-end-9">
        <Image 
          src={about2}
          className="rounded-3xl object-cover shadow-xl 2xl:w-full 2xl:h-full"
        />

      </div>
      
      <Image 
        src={about2}
        className="rounded-3xl object-cover shadow-xl xl:h-[691px] sm:h-[413px] h-96 col-start-2 xl:col-start-5 sm:col-start-7 row-start-2 xl:col-end-9 col-end-12 my-6 sm:my-0  lg:w-[416px] lg:h-[691px] 2xl:w-[500px] 2xl:hidden"
      />

      <Image 
        src={about3}
        className="hidden rounded-[20px] col-start-9 col-end-11 row-start-2 xl:hidden sm:block sm:col-start-7 sm:col-end-12 sm:row-start-3 sm:w-[263px] sm:h-[210px] lg:col-start-7 lg:col-end-12 lg:w-[416px] lg:h-[416px] lg:object-cover shadow-xl xl:col-end-12 xl:col-start-9 xl:w-[291px] xl:h-[291px] xl:row-start-2"
      />

      <p className="xl:flex xl:justify-between 2xl:items-center flex-col text-base xl:col-start-9 xl:col-end-12 xl:text-right xl:row-start-2 col-start-2 col-end-12 sm:text-xl sm:col-end-7 lg:hidden xl:text-3xl 2xl:col-start-9 2xl:col-end-11 2xl:text-2xl gap-5" >
        <Image 
          src={about3}
          className="hidden rounded-[20px] col-start-9 col-end-11 row-start-2 xl:block  shadow-xl xl:col-end-12 xl:col-start-9 xl:w-[291px] xl:h-[291px] xl:row-start-2 object-cover"
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra mauris mi, sed iaculis libero maximus et. Ut pharetra sem in lobortis vestibulum. Suspe potenti
        
      </p>

      <div className="hidden xl:hidden lg:flex justify-center items-center col-start-2 col-end-7">
        <p className="text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra mauris mi, sed iaculis libero maximus et. Ut pharetra sem in lobortis vestibulum. Suspe potenti</p>
      </div>

    </section>
  )
}

export default About