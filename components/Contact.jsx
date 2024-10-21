import igLogo from '../assets/svg/igLogo.svg';
import wspLogo from '../assets/svg/wspLogo.svg'
import Image from 'next/image';

const Contact = () => {
  return (
    <section className='font-bold xl:h-[420px] h-[246px] leading-[60px] xl:text-5xl bg-gradient-to-b from-[#038fd9] to-[#066698] grid grid-cols-12 grid-rows-1 gap-x-5 gap-y-0 mt-10 text-white'>
      <div className='xl:col-start-5 col-start-2 xl:col-end-9 col-end-12 h-full flex flex-col xl:gap-12 gap-6 justify-center items-center'>
        
        <div>
          <h2 className='2xl:text-7xl sm:text-[40px] text-[32px] lg:text-[50px]'>Haz tu pedido!</h2>
        </div>
        

        <div className='flex flex-col gap-4 text-2xl lg:text-4xl font-bold'>
          <div className='flex gap-4 items-center justify-start'>
            <Image src={wspLogo}/>
            <h2 className='xl:font-normal'>999 999 999</h2>
          </div>

          <div className='flex gap-4 items-center justify-start'>
            <Image src={igLogo}/>
            <h2 className='xl:font-normal'>@galletas_tachi</h2>

          </div>


        </div>
      </div>

    </section>
  )
}

export default Contact