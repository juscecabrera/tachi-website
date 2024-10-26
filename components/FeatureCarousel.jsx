import Image from "next/image";
import carousel1 from '../assets/images/carousel1.jpg'
import carousel2 from '../assets/images/carousel2.jpg'
import carousel3 from '../assets/images/carousel3.jpg'
import carousel4 from '../assets/images/carousel4.jpg'
import carousel5 from '../assets/images/carousel5.jpg'
import carousel6 from '../assets/images/carousel6.png'
import carouselPage1 from '../assets/images/carouselPage1.jpg'
import carouselPage2 from '../assets/images/carouselPage2.jpg'
import carouselPage3 from '../assets/images/carouselPage3.png'
import carouselPage4 from '../assets/images/carouselPage4.jpeg'
import carouselPage5 from '../assets/images/carouselPage5.jpeg'
import carouselPage6 from '../assets/images/carouselPage6.jpeg'

const FeatureCarousel = ({ page, direction }) => {
  
  let images

  if (page) {
    images = [
      carouselPage1,
      carouselPage2,
      carouselPage3,
      carouselPage4,
      carouselPage5,
      carouselPage6
    ]
  } else {
    images = [
      carousel1,
      carousel2,
      carousel3,
      carousel4,
      carousel5,
      carousel6
    ]; 
  }
  
  
  return (
    //mejorar el salto
    //editar las imagenes para sacar las flechas de ig
    <div className={`overflow-hidden w-full flex items-center col-start-1 col-end-13 ${page ? 'xl:h-[508px] h-[330px]'  : 'bg-primary h-[342px]'} `}>
      <div className={`flex ${direction === 'l' ? 'animate-move-carousel-l-to-r-mobile xl:animate-move-carousel-l-to-r md:animate-move-carousel-l-to-r' : 'animate-move-carousel-r-to-l-mobile xl:animate-move-carousel-r-to-l md:animate-move-carousel-r-to-l'}`}>
        {images.map((image, index) => (
          <Image 
            key={index}
            src={image} 
            alt={`Slide ${index}`}
            className={`${page ? '' : 'rounded-[20px]'} object-fill ${page ? 'xl:w-[508px] w-80' : 'w-[324.8px]'} ${page ? 'xl:h-[508px] h-[330px]' : 'h-[324.8px]'}`}
          />
        ))}
        {/* Duplicamos las imágenes para lograr el bucle continuo */}
        {images.map((image, index) => (
          <Image 
            key={index + images.length}
            src={image} 
            alt={`Slide ${index}`}
            className={`${page ? '' : 'rounded-[20px]'} object-fill ${page ? 'xl:w-[508px] w-80' : 'w-[324.8px]'} ${page ? 'xl:h-[508px] h-[330px]' : 'h-[324.8px]'}`}

          />
        ))}
      </div>
    </div>
  );
};

export default FeatureCarousel;
