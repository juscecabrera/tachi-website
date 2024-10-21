import FeatureCarousel from "./FeatureCarousel"

const Carousel = () => {
  return (
    <section className='grid grid-cols-12 grid-rows-1 xl:gap-5 gap-1 mt-10 xl:h-[508px] h-[330px] text-white bg-[rgba(0,0,0,0.3)]'>
      <div className='z-10 flex flex-col justify-center items-center gap-6 col-start-2 sm:col-start-3 col-end-12 sm:col-end-11 row-start-1 row-end-2'>
        <h2 className='2xl:text-7xl sm:text-[50px] text-[32px] text-center font-bold sm:leading-[114%] lg:text-7xl lg:leading-[113.8%]'>
          Disfruta tus postres hechos a medida
        </h2>

        <button className='xl:h-16 xl:w-56 w-40 sm:w-[209px] h-[51px] sm:text-lg text-xl orange-button lg:text-2xl lg:w-56 lg:h-[76px]'>
          Pide aquí
        </button>
      </div>
      
      <div className="-z-50 col-start-1 col-end-13 w-full h-full row-start-1 row-end-2">
        <FeatureCarousel page={true} direction={'r'}/>
      </div>
    </section>
  )
}

export default Carousel