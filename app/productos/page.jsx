import Image from 'next/image'
import products1 from '../../assets/images/products1.jpeg'
import { copy } from '@/assets/copy'
import pionono from '../../assets/images/pionono.png'
import tortaChocolate from '../../assets/images/tortaChocolate.png'
import pieLimon from '../../assets/images/pieLimon.png'
import alfajores from '../../assets/images/alfajores2.png'
import brownies from '../../assets/images/brownies.png'
import paqueteDulce from '../../assets/images/paqueteDulce2.png'
import paqueteSalado from '../../assets/images/paqueteSalado2.png'
import paquete1 from '../../assets/images/paquete1.png'
import galletas from '../../assets/images/galletas.png'

const ProductCard = ({ text, price, image, descripcion }) => { 

  return (
    <div className='border-black border-2 rounded-[20px] col-start-2 col-end-12 p-4 flex flex-col items-start justify-start gap-4 w-full sm:w-[46%]
    lg:flex-row lg:items-center lg:w-[49%] 2xl:w-[30%]
    '>
      <div className='rounded-[20px] lg:h-full lg:w-full'>
        <Image 
          src={image}
          alt='torta personalizada'
          className='rounded-[20px] lg:h-full lg:object-cover'
        />

      </div>

      <div className='flex flex-col items-start justify-between gap-8 w-full h-full'>
        
        <div className='flex flex-col items-start w-full gap-4'>
          <h3 className='text-2xl font-bold'>{text}</h3>
          <p>{descripcion}</p>
        </div>
        
        <div className='flex flex-col items-start w-full gap-4'>
          <p className='text-xl'>{price}</p>
          <button className='orange-button px-9 h-12 text-lg'>Pide aqui</button>  
        </div>

      </div>

    </div>
  )
}

const CategoryCard = ({ category, children }) => { 
  return (
    <div className='flex flex-col items-start justify-start gap-y-8'>
      <div className='w-full'>
        <h3 className='text-2xl font-bold mb-4 lg:text-3xl'>{category}</h3>
        <div className='bg-[#FACC15] h-3 w-44'/> 
      </div>
      <div className='flex flex-col flex-wrap justify-between 2xl:justify-start gap-8 sm:flex-row lg:gap-4'>
        {children}
      </div>
    </div>
  )
}

const Productos = () => {
  return (
    <section className='grid grid-cols-12 grid-rows-1 gap-1 mt-5 bg-white text-black lg:gap-5 xl:mt-10 sm:gap-y-8 sm:border-b-2 sm:pb-10'>
      <h2 className='text-[32px] font-bold col-start-2 lg:text-[48px]'>Productos</h2>

      <div className='col-start-2 col-end-12 flex flex-col gap-y-12 justify-start items-start mt-10 sm:mt-1'>
        
        <CategoryCard category={'Tortas y Galletas Personalizadas'}>
          <ProductCard 
            text={'Torta Personalizada'} 
            price={'S/. 40 - S/. 120'} 
            image={products1}
            descripcion={copy.product1Desc}
          />

          <ProductCard 
            text={'Galletas Personalizadas'} 
            price={'S/. 40 - S/. 120'} 
            image={galletas}
            descripcion={copy.product1Desc}
          />
        </CategoryCard>
        
        <CategoryCard category={'Paquetes'}>
          <ProductCard 
            text={'Paquete Bocaditos Dulces'} 
            price={'S/. 40 - S/. 120'} 
            image={paqueteDulce}
            descripcion={copy.product3Desc}
          />
          
          <ProductCard 
            text={'Paquete Bocaditos Salados'} 
            price={'S/. 40 - S/. 120'} 
            image={paqueteSalado}
            descripcion={copy.product4Desc}
          />
          
          <ProductCard 
            text={'Paquete para Decorar Galletas'} 
            price={'S/. 40 - S/. 120'} 
            image={paquete1}
            descripcion={copy.product5Desc}
            />
        </CategoryCard>

        <CategoryCard category={'Tortas'}>
          <ProductCard 
            text={'Torta de Chocolate'} 
            price={'S/. 60'} 
            image={tortaChocolate}
            descripcion={'Torta de Chocolate para 16 porciones'}
          />

          <ProductCard 
            text={'Pie de Limon'} 
            price={'S/. 60'} 
            image={pieLimon}
            descripcion={'Pie de limón para 12 porciones'}
            />

          <ProductCard 
            text={'Pionono'} 
            price={'S/. 60'} 
            image={pionono}
            descripcion={'Pionono relleno de manjar para 16 porciones'}
            />

        </CategoryCard>

        <CategoryCard category={'Bocaditos'}>
          <ProductCard 
            text={'Brownies'} 
            price={'S/. 60'} 
            image={brownies}
            descripcion={'12 unidades'}
            />

          <ProductCard 
            text={'Alfajores'} 
            price={'S/. 60'} 
            image={alfajores}
            descripcion={'12 unidades'}
            />

        </CategoryCard>
      </div>
    </section>
  )
}

export default Productos