import { useState, useEffect } from "react";
import { API_URL } from "../../Api/api";

const Admin = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message,setMessage]=useState()
  const handleUpload = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log(API_URL)
      const image = e.target.image.files[0];
      const title = e.target.title.value;
      const description = e.target.description.value;
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", image);
      formData.append("description", description);
      
      const res = await fetch(`${API_URL}/admin/image/add`, {
        method: "POST",
        body: formData,
        credentials:'include',
      });
      const data = await res.json();
      
      if (res.ok) {
        console.log(data);
        setImages(data);
      
        e.target.reset();
      } else {
        console.log("server error");
        setMessage(data.message)
      }
    } catch (error) {
      console.log("upload failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getImages = async () => {
    const res = await fetch(`${API_URL}/admin/images`, {
      method: "GET",
      credentials:'include'
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

  const handleDelete = async (id, publicId) => {
    const res = await fetch(`${API_URL}/admin/${id}`, {
      method: "DELETE",
      
      headers: {
        "content-type": "application/json",
      },
      credentials:'include',
      body: JSON.stringify(publicId),
    });
    if (res.ok) {
      setImages((prev) => prev.filter((image) => image._id !== id));
    }
  };

  return (
    <>
   
      <div className="bg-gradient-to-br  from-yellow-50 via-purple-50 to-amber-50 m-0">
        <p className="text-5xl m-5 mt-0 pt-10 text-center text-amber-800">
          Upload Images
        </p>
        <form onSubmit={handleUpload}>
          <div className="flex flex-col items-center">
            <div>
              <textarea
                name="title"
                placeholder="enter title"
                required
                className="border border-purple-500 text-black rounded-lg p-3 m-3 text-[16px] hover:border-black resize-none w-[40ch] "
              />
            </div>
            <div>
              <textarea
                name="description"
                placeholder="enter description"
                required
                className="border border-purple-500 text-black rounded-lg p-3 m-3 text-medium text-sm hover:border-black resize-none w-[45ch] h-32"
              />
            </div>
            <div className="w-full flex justify-center">
              <input
                type="file"
                name="image"
                required
                className="file-input border rounded p-3 border-purple-500 hover:border-black"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="border bg-white border-blue-500 m-2 py-2 px-4 hover:border-2 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[120px]"
              >
                {isLoading && (
                  <svg
                    className="animate-spin h-5 w-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                {isLoading ? "Uploading..." : "Add Photo"}
              </button>
            </div>
          </div>
        </form>
              <div className="flex text-center m-4">
            {message && <><h3 className="  mx-auto font-medium">{message}</h3></>}
          </div>
        <div className="columns-2 md:columns-3 gap-6 m-8 overflow-x-hiddenmd:m-10 ">
          
          {images.map((image) => {
            return (
              <>
                <div className="image-container flex flex-col gap-4 break-inside-avoid">
                  <img
                    src={image.image.url}
                    loading="lazy"
                    className="w-full  object-cover"
                  ></img>

                  <button
                    className="border bg-red-300 hover:bg-red-400 m-2 rounded-lg py-2 px-4"
                    onClick={() => handleDelete(image._id, image.publicID)}
                  >
                    Delete
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Admin;