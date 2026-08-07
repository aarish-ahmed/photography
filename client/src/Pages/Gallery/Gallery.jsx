import { useState, useEffect } from "react";
import { API_URL } from "../../Api/api";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import "@fontsource/orbitron";
import CategoryCarousel from "../../Components/CategoryCarousel";
import HeroBanner from "../../Components/Hero";
import Navbar from "../../Components/Navbar";

const Gallery = () => {
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
      <Navbar/>
      <h1 className="text-center text-4xl font-serif md:text-6xl">Gallery</h1>
      <div className="py-14">
       

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
      <div className="columns-2 md:columns-6 px-6 md:px-12">
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
                    className="w-full h-full py-2 md:py-2 "
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

export default Gallery;