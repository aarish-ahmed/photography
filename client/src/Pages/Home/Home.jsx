import { useState, useEffect } from "react";
import { API_URL } from "../../Api/api";
import { Link } from "react-router-dom";
const Home = () => {
  const [images, setImages] = useState([]);
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
  }, [images]);
  return (
    <div>
      <div className=" columns-2 md:columns-3   px-8   md:px-12 ">
        {images.map((image) => {
          return (
            <>
              <Link to={`/image/${image._id}`}>
                <div className="image-container    break-inside-avoid ">
                  <img
                    src={image.image.url}
                    loading="lazy"
                    className=" w-full h-full  py-2 md:py-4 md:px-2"
                  ></img>
                </div>
              </Link>
            </>
          );
        })}
      </div>
      <div className=" bg-gray-100 flex flex-col gap-4 px-16 py-5 text-center ">
        <p className="text-2xl md:text-4xl font-serif">
          Subscribe to our newsletter.
        </p>
        <p className="text-[18px] font-serif md:text-[22px]">
          Sign up with your email address to receive news and updates.{" "}
        </p>
        <div className="flex flex-row items-center justify-center gap-2 my-4">
          <input
            type="email"
            placeholder="Email Address"
            className="bg-white text-center py-5 px-10"
          ></input>
          <button className="border border-orange-500 py-5 px-6 hover:bg-orange-500">
            Sign up
          </button>
        </div>
      </div>
      <div className="footer bg-gray-100 text-center pt-15 pb-10">
        <p>
          All photography © Copyright Levon Biss 2025. No unauthorised use. For
          all enquiries please email -{" "}
          <a
            href="https://www.levonbiss.com/"
            className="text-orange-500 border-b"
          >
            {" "}
            contact@levonbiss.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
