import { useState, useEffect } from "react";
import { API_URL } from "../../Api/api";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import "@fontsource/orbitron";
import CategoryCarousel from "../../Components/CategoryCarousel";
import HeroBanner from "../../Components/Hero";

// Extracted from your Services component
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

const Home = () => {
  const [images, setImages] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = [
    "All",
    "Wedding",
    "Reception",
    "Outdoor",
    "Birthday",
    "Haldi",
  ];

  const getImages = async () => {
    const res = await fetch(`${API_URL}/app/images`, {
      method: "GET",
    });

    const data = await res.json();

    if (res.ok) {
      setImages(data);
    } else {
      console.log("image fetch failed");
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <HeroBanner />

      {/* ===== Top Cards Section (Overlapping Hero) ===== */}
      <section className="w-full max-w-[1400px] mx-auto px-6 relative z-10 -mt-16 md:-mt-24 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topCardsData.map((card) => (
            <div key={card.id} className="bg-white shadow-xl flex flex-col h-full relative p-[10px] md:p-[18px]">
              {/* Optional Absolute Logo Overlay Top Left */}
              <div className="absolute top-6 left-6 z-10 w-8 h-8">
                {/* Logo img can go here */}
              </div>
              
              <img 
                src={card.imgUrl} 
                alt={card.title} 
                className="w-full h-[300px] object-cover" 
              />
              <div className="pt-8 pb-4 text-center flex-grow flex flex-col items-center">
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
      </section>

      {/* ===== Categories Carousel ===== */}
      <CategoryCarousel />

      {/* ===== Heading & Filter ===== */}
      <div className="py-14">
        <h1
          style={{ fontFamily: "Orbitron" }}
          className="header text-center text-3xl font-extrabold"
        >
          OUR LATEST WORKS
        </h1>

        <div className="flex justify-center flex-wrap gap-y-2 mt-8">
          {filters.map((filter, index) => (
            <div key={filter} className="flex items-center">
              <button
                onClick={() => setSelectedFilter(filter)}
                className={`px-2 md:px-6 text-lg md:text-xl transition-all duration-200 cursor-pointer ${
                  selectedFilter === filter
                    ? "text-[#980020]"
                    : "text-gray-500 hover:text-[#980020]"
                }`}
              >
                {filter}
              </button>

              {index !== filters.length - 1 && (
                <span className="text-gray-300">|</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ===== Gallery ===== */}
      <div className="columns-2 md:columns-3 px-6 md:px-12">
        {images
          .filter((image) => {
            if (selectedFilter === "All") return true;

            return (
              image.category?.toLowerCase() ===
              selectedFilter.toLowerCase()
            );
          })
          .map((image) => {
            return (
              <Link key={image._id} to={`/image/${image._id}`}>
                <div className="image-container break-inside-avoid">
                  <img
                    src={image.image.url}
                    loading="lazy"
                    className="w-full h-full py-2 md:py-4 md:px-2"
                  />
                </div>
              </Link>
            );
          })}
      </div>

      <Footer />
    </div>
  );
};

export default Home;