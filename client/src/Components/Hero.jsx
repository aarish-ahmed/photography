import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import "@fontsource/orbitron";
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const heroImages = [
  { id: 1, url: '/Haldi.jpg' },
  { id: 2, url: '/Wedding2.jpg' },
  { id: 3, url: '/Birthday1.jpg' },
];

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center">
      {/* Background Slider */}
      <Swiper
      style={{
          '--swiper-navigation-color': '#ffffff',
          '--swiper-navigation-size': '30px',
        }}
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="absolute inset-0 w-full h-full z-0 
          [&_.swiper-button-next]:bg-black/60 [&_.swiper-button-next]:text-white [&_.swiper-button-next]:w-12 [&_.swiper-button-next]:h-12 [&_.swiper-button-next]:rounded-full [&_.swiper-button-next:after]:text-lg [&_.swiper-button-next:after]:font-bold [&_.swiper-button-next]:mr-4
          [&_.swiper-button-prev]:bg-black/60 [&_.swiper-button-prev]:text-white [&_.swiper-button-prev]:w-12 [&_.swiper-button-prev]:h-12 [&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev:after]:text-lg [&_.swiper-button-prev:after]:font-bold [&_.swiper-button-prev]:ml-4"
      >
        {heroImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="w-full h-full">
              <img 
                src={image.url} 
                alt={`Hero background ${image.id}`} 
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Static Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        
        {/* Top Left Logo Container */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12">
          
        </div>

        {/* Center Text */}
        <h1 
          className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wider uppercase drop-shadow-md px-4"
          style={{ fontFamily: "Orbitron" }}
        >
          PREMIUM PHOTOGRAPHY & CINEMATOGRAPHY
        </h1>
        
        <p className="text-white text-sm md:text-base lg:text-lg max-w-4xl mb-8 leading-relaxed drop-shadow-md">
          Capture the moment, create the memory. We turn fleeting moments into timeless art. <br className="hidden md:block" />
          Whether it's a wedding, portrait, or lifestyle shoot—our studio is where life meets light.
        </p>
        
        {/* Contact Button */}
        <Link to='/contact' className="pointer-events-auto bg-[#7b113a] text-white px-8 py-3 md:px-10 md:py-4 font-bold uppercase tracking-wider hover:bg-[#5a0c2a] transition-colors shadow-lg">
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;