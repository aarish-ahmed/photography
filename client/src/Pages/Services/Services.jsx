
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const topCardsData = [
  {
    id: 1,
    title: 'SHOOTING',
    imgUrl: '/Haldi.jpg',
    description: 'Where every click tells your story. Our skilled team captures raw emotion, beauty, and real-life essence through curated photo sessions tailored for you',
  },
  {
    id: 2,
    title: 'VIDEOS',
    imgUrl: '/Outdoor.JPG',
    description: 'Your story in motion. From weddings to brand documentaries, we craft cinematic video productions that resonate deeply and leave lasting impressions.',
  },
  {
    id: 3,
    title: 'EDITING',
    imgUrl: '/Wedding2.jpg',
    description: 'Where magic happens post-capture. Our expert editors enhance your visuals with precision, tone-matching, and storytelling edits that make every frame speak louder.',
  },
];

const bottomServicesData = [
  {
    num: '01',
    title: 'FILMING AND EDITING',
    description: 'We bring your vision to life with cinematic filming and seamless editing. From concept to final cut, we craft videos that move and inspire.',
  },
  {
    num: '02',
    title: 'SOCIAL MEDIA PHOTOGRAPHY',
    description: 'Showcase your brand, products, or services with professional clarity. Our visuals are designed to attract, inform, and convert.',
  },
  {
    num: '03',
    title: 'ENGAGEMENT PHOTOGRAPHY',
    description: "Capture attention with bold, high-quality visuals made for digital platforms. Perfectly styled content tailored to boost your brand's online presence.",
  },
  {
    num: '04',
    title: 'EVENT PHOTOGRAPHY',
    description: 'From private parties to grand openings, we capture it all with precision. Relive every smile, laugh, and special moment through our lens.',
  },
  {
    num: '05',
    title: 'COMERCIAL PHOTOGRAPHY',
    description: "Celebrate love with timeless engagement portraits in stunning settings. We turn your moments into memories you'll cherish forever.",
  },
  {
    num: '06',
    title: 'PERSONAL PHOTOGRAPHY',
    description: "Whether it's a portrait, lifestyle session, or creative shoot — we make it personal. Authentic, expressive, and tailored just for you.",
  },
];

const ServicesSection = () => {
  return (
    <>
    <Navbar/>
    <h1 className='text-center text-4xl font-serif md:text-5xl mt-10'>OUR SERVICES</h1>
    <section className="w-full max-w-[1400px] mx-auto py-16 px-6">
        
      {/* Top Cards Section - Grid layout for stacking on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {topCardsData.map((card) => (
          <div key={card.id} className="bg-white shadow-xl flex flex-col h-full relative">
            {/* Optional Absolute Logo Overlay Top Left */}
            <div className="absolute top-4 left-4 z-10 w-8 h-8">
               
            </div>
            
            <img 
              src={card.imgUrl} 
              alt={card.title} 
              className="w-full h-[300px] object-cover" 
            />
            <div className="p-8 text-center flex-grow flex flex-col items-center">
              <h3 className="text-[#1a1a3a] text-2xl font-bold font-serif uppercase mb-4">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Text Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {bottomServicesData.map((service, index) => (
          <div key={index} className="flex items-start">
            <div className="bg-[#7b113a] text-white flex-shrink-0 w-12 h-10 flex items-center justify-center font-bold text-lg mr-6">
              {service.num}
            </div>
            <div>
              <h4 className="text-xl font-bold font-serif uppercase mb-3 text-black">
                {service.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </section>
    <Footer/>
    </>
  );
};

export default ServicesSection;