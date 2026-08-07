import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import "@fontsource/orbitron";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const categoryData = [
  { id: 1, title: 'WEDDING', count: 325, imgUrl: '/Wedding2.jpg' },
  { id: 2, title: 'BIRTHDAY', count: 540, imgUrl: '/Birthday1.jpg' },
  { id: 3, title: 'HALDI', count: 120, imgUrl: '/Haldi.jpg' },
  { id: 4, title: 'OUTDOOR', count: 85, imgUrl: '/Outdoor.JPG' },
  { id: 5, title: 'RECEPTION', count: 210, imgUrl: '/Reception.jpg' },
];

const CategoryCarousel = () => {
  // Duplicate the array so Swiper has enough elements to create an infinite loop
  const extendedData = [...categoryData, ...categoryData];

  return (
    <section className="w-full max-w-[1400px] mx-auto overflow-hidden py-10">
      <div className="flex justify-between items-end mb-6 px-5">
        <div>
          <h2 className="text-3xl font-extrabold font-serif uppercase mb-2" >CATEGORIES</h2>
          <p className="text-gray-500 text-sm m-0">Moments captured, organized by story.</p>
        </div>
        <a href='/gallery' className="bg-[#7b113a] text-white px-6 py-3 font-bold text-sm uppercase cursor-pointer border-none hover:bg-[#5a0c2a] transition-colors">
          VIEW ALL
        </a>
      </div>

      {/* Added px-6 here to provide horizontal padding on both sides */}
      <div className="
        px-6 
        [&_.swiper-button-next]:bg-black/60 [&_.swiper-button-next]:text-white [&_.swiper-button-next]:w-10 [&_.swiper-button-next]:h-10 [&_.swiper-button-next]:rounded-full [&_.swiper-button-next:after]:text-base [&_.swiper-button-next:after]:font-bold
        [&_.swiper-button-prev]:bg-black/60 [&_.swiper-button-prev]:text-white [&_.swiper-button-prev]:w-10 [&_.swiper-button-prev]:h-10 [&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev:after]:text-base [&_.swiper-button-prev:after]:font-bold
      ">
        <Swiper
        style={{
          '--swiper-navigation-color': '#ffffff',
          '--swiper-navigation-size': '30px',
        }}
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 3.5,
            },
          }}
          centeredSlides={true}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {extendedData.map((category, index) => (
            <SwiperSlide key={`${category.id}-${index}`}>
              <div className="bg-[#f8f9fa] flex flex-col h-full">
                <img 
                  src={category.imgUrl} 
                  alt={category.title} 
                  className="w-full h-[350px] object-cover" 
                />
                <div className="p-5 text-center">
                  <h3 className="m-0 mb-2 text-lg font-bold uppercase">{category.title}</h3>
                  <p className="m-0 text-[#7b113a] text-sm">{category.count} pictures</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategoryCarousel;