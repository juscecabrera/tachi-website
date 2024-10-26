import FeatureCarousel from "./FeatureCarousel"
import { copy } from "@/assets/copy"
import Image from "next/image"

const FeatureBox = ({ text1, text2, color }) => {
  return (
    <div 
      className={`${color === 'blue' ? 'bg-primary' : 'bg-[#D95303]'} 2xl:w-44 2xl:h-44 w-20 sm:w-[120px] lg:w-[172px] h-20 sm:h-[110px] lg:h-[172px] feature-box`}>
      <p className='font-bold text-2xl 2xl:text-6xl  lg:text-[64px] lg:mb-5 sm:text-[40px] '>{text1}</p>
      <p className="2xl:text-3xl text-base sm:text-2xl lg:text-[32px]">{text2}</p>
    </div>
  )
}

const Feature = () => {
  return (
    <section className='font-teachers grid grid-cols-12 grid-rows-1 gap-1 lg:gap-5'>

      <div className='flex flex-row justify-between pt-8 lg:pt-12 col-start-2 col-end-12 sm:col-start-3 sm:col-end-11'>
        <FeatureBox text1={'+10'} text2={'Años'} color={'blue'}/>
        <FeatureBox text1={'+1000'} text2={'Pedidos'} color={'orange'}/>
        <FeatureBox text1={'+300'} text2={'Clientes'} color={'blue'}/>
      </div>

      <div className="w-full flex items-center flex-col my-6 lg:mb-0 col-start-2 col-end-12 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10 mt-12">
        <h2 className='xl:text-5xl text-2xl font-bold text-center xl:leading-[60px] mb-6 sm:text-[40px] sm:leading-10 lg:text-[50px] lg:leading-[60px]'>Galletas y tortas personalizadas a mano</h2>
        <p className="2xl:text-2xl xl:text-2xl text-base text-justify sm:text-xl lg:hidden">{copy.featureCopy}</p>
      </div>
        <p className="2xl:text-2xl 2xl:col-start-4 2xl:col-end-10 text-3xl text-center hidden lg:block col-start-2 xl:col-start-3 xl:col-end-11 xl:text-3xl col-end-12 xl:mb-5">{copy.featureCopy} </p>

      {/* No lo modifique para mobile porque al parecer se ve bien asi como esta */}
      <FeatureCarousel page={false} direction={'l'} />
    </section>
  )
}

export default Feature