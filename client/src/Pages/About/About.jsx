import React from 'react';
import Footer from '../../Components/Footer';

const featureData = [
  {
    id: 1,
    title: "PROFESSIONALISM",
    desc: "Because your moments deserve our best. Our team combines creative artistry with disciplined workflow—ensuring timely delivery, ethical practices, and studio-grade results.",
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "INDIVIDUAL APPROACH",
    desc: "Every client is a new story. We listen, plan, and execute your vision with personalized care. No two shoots are the same, because no two stories are.",
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9h1M9 13h6M9 17h6" />
      </svg>
    )
  },
  {
    id: 3,
    title: "FLEXIBLE SCHEDULE",
    desc: "We work around your world. Busy schedule? No problem. We offer flexible booking times and on-location services to make your experience hassle-free.",
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    id: 4,
    title: "EXPERIENCE",
    desc: "Years of capturing moments that matter. With a strong background in photography, videography, and editing, our portfolio reflects consistent quality and trusted excellence.",
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )
  }
];

const testimonialsData = [
  {
    id: 1,
    name: "NISHA & TANMOY",
    imgUrl: "/Wedding2.jpg",
    text: "Chitromoncho captured our wedding exactly how we dreamed it – emotional, timeless, and beautiful"
  },
  {
    id: 2,
    name: "RIFAH & HRIDOY",
    imgUrl: "/Reception.jpg",
    text: "Highly recommended for anyone who wants more than just pictures – they deliver memories."
  },
  {
    id: 3,
    name: "HRIDI",
    imgUrl: "/Outdoor.JPG",
    text: "Five stars aren't enough – thank you for making our moments last forever!"
  },
  {
    id: 4,
    name: "TASNIA & REZAUL",
    imgUrl: "/Wedding1.jpg",
    text: "From the first click to the final edit, Chitromoncho made our story unforgettable."
  }
];

const About = () => {
  return (
    <>
    <div className="w-full bg-[#f8f9fa]">
      
      {/* ===== 1. Mission & Features Section ===== */}
      <section className="flex flex-col lg:flex-row w-full min-h-[80vh]">
        {/* Left Side Image - Hidden on mobile, visible on desktop */}
        <div className="  lg:block lg:w-1/2">
          <img 
            src="/Wedding2.jpg" 
            alt="Wedding Couple" 
            className="w-full h-120 md:h-full object-cover" 
          />
        </div>
        
        {/* Right Side Text & Features */}
        <div className="w-full lg:w-1/2 py-16 px-6 lg:px-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif uppercase mb-6 text-black leading-tight">
            CAPTURING THE MOMENTS THAT CAPTIVATE YOUR HEART - DELIVERING YOUR EVERLASTING STORIES, WHERE LIGHT MEETS LIFE
          </h2>
          <p className="text-gray-600 mb-12 text-sm md:text-base">
            Your moment. Our mission. Chitromoncho is a creative photography house committed to telling real stories with professional finesse and a personal touch.
          </p>
          
          <div className="flex flex-col gap-8">
            {featureData.map((feature) => (
              <div key={feature.id} className="flex items-start">
                <div className="bg-white p-4 shadow-sm border border-gray-100 flex-shrink-0 mr-6">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-serif uppercase mb-2 text-black">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. Promotional Banner Section ===== */}
      <section 
        className="relative w-full py-24 md:py-32 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: "url('/promo-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold font-serif text-white uppercase mb-6 tracking-wide drop-shadow-md">
            WANNA PROMOTE YOUR BRAND?
          </h2>
          <p className="text-white text-base md:text-lg mb-10 drop-shadow-sm">
            We'll make your brand visually unforgettable. From content strategy to full-scale video ads, Chitromoncho helps your brand stand out through professional visuals and storytelling.
          </p>
          <a href='/contact' className="bg-[#7b113a] text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#5a0c2a] transition-colors shadow-lg">
            CONTACT US
          </a>
        </div>
      </section>

      {/* ===== 3. Testimonials Section ===== */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif uppercase mb-4 text-black">
              WHAT CLIENT SAY?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col">
                
                {/* Top Quote Mark & Line */}
                <div className="flex items-center mb-6">
                  <span className="text-green-500 font-extrabold italic text-2xl mr-4 leading-none">//</span>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                {/* Profile */}
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.imgUrl} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <h4 className="font-bold font-serif text-black uppercase">
                    {testimonial.name}
                  </h4>
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {testimonial.text}
                </p>

                {/* Bottom Quote Mark & Line */}
                <div className="flex items-center mt-auto">
                  <span className="text-green-500 font-extrabold italic text-2xl mr-4 leading-none">//</span>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
    <Footer/>
    </>
  );
};

export default About;