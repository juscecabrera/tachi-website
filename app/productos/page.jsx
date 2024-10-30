import Image from 'next/image'
import products1 from '../../assets/images/products1.jpeg'

const ProductCard = ({ text, price, image }) => { 

  return (
    <div className='border-black border-2 rounded-[20px] col-start-2 col-end-12 p-4 flex flex-col items-start justify-start gap-4'>
      <Image 
        src={image}
        alt='torta personalizada'
        className='rounded-[20px]'
      />

      <h3 className='text-2xl font-bold'>
        {text}
      </h3>

      <p>
        Descripcion
      </p>

      <p className='text-xl'>
        {price}
      </p>

      <button className='orange-button px-9 h-12 text-lg'>
        Pide aqui
      </button>  
    </div>
  )
}

const CategoryCard = ({ category, children }) => { 
  return (
    <div className='flex flex-col items-start justify-start gap-y-8'>
      <div>
        <h3 className='text-2xl font-bold mb-4'>{category}</h3>
        <div className='bg-[#FACC15] h-3 w-44'/> 
      </div>
      {children}
    </div>
  )
}

const Productos = () => {
  return (
    <section className='grid grid-cols-12 grid-rows-1 gap-1 mt-5 bg-white text-black lg:gap-5 xl:mt-10 sm:gap-y-8'>
      <h2 className='text-[32px] font-bold col-start-2'>Productos</h2>

      <div className='col-start-2 col-end-12 flex flex-col gap-y-12 justify-start items-start mt-10'>
        
        <CategoryCard category={'Tortas y Galletas Personalizadas'}>
          <ProductCard text={'Torta Personalizada'} price={'S/. 40 - S/. 120'} image={products1}/>
          <ProductCard text={'Galletas Personalizadas'} price={'S/. 40 - S/. 120'} image={products1}/>
        </CategoryCard>
        
        <CategoryCard category={'Paquetes'}>
          <ProductCard text={'Paquete Bocaditos Dulces'} price={'S/. 40 - S/. 120'} image={products1}/>
          <ProductCard text={'Paquete Bocaditos Salados'} price={'S/. 40 - S/. 120'} image={products1}/>
          <ProductCard text={'Paquete para Decorar Galletas'} price={'S/. 40 - S/. 120'} image={products1}/>
        </CategoryCard>

        <CategoryCard category={'Tortas'}>
          <ProductCard text={'Torta de Chocolate'} price={'S/. 60'} image={products1}/>
          <ProductCard text={'Pie de Limon'} price={'S/. 60'} image={products1}/>
          <ProductCard text={'Pionono'} price={'S/. 60'} image={products1}/>
        </CategoryCard>

        <CategoryCard category={'Bocaditos'}>
          <ProductCard text={'Brownies'} price={'S/. 60'} image={products1}/>
          <ProductCard text={'Alfajores'} price={'S/. 60'} image={products1}/>
        </CategoryCard>


      </div>
    </section>
  )
}

export default Productos