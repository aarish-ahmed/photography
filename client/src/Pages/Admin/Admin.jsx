import { useState, useEffect } from "react";
import { API_URL } from "../../Api/api";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleUpload = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log(API_URL);
      const image = e.target.image.files[0];
      const category = e.target.category.value;
      const formData = new FormData();
      
      formData.append("image", image);
      formData.append("category", category);
      
      const res = await fetch(`${API_URL}/admin/image/add`, {
        method: "POST",
        body: formData,
        credentials: 'include',
      });
      const data = await res.json();
      
      if (res.ok) {
        console.log(data);
        // Corrected: Notun upload kora chobi purono array-er surute add kora hocche
        setImages((prev) => [...data, ...prev]); 
      
        e.target.reset();
      } else {
        console.log("server error");
        setMessage(data.message);
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
      credentials: 'include'
    });
    const data = await res.json();
    if (res.ok) {
      // Corrected: Database theke asha shob data directly set kora hocche
      setImages(data);
    } else {
      console.log("image fetch failed");
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/admin/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        credentials: 'include',
      });
      
      const data = await res.json();

      if (res.ok) {
        // Remove image from UI
        setImages((prev) => prev.filter((image) => image._id !== id));
        
        // Display toast message
        setMessage("Image deleted successfully!");
        
        // Clear message after 3 seconds
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      } else {
        setMessage(data.message || "Failed to delete image.");
        setTimeout(() => setMessage(null), 3000);
      }
    } catch (error) {
      console.error("Network or fetch error during deletion:", error);
      setMessage("Network error occurred while deleting.");
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await fetch(`${API_URL}/admin/logout`, {
        method: "POST", // Standard HTTP method for state-changing actions like logout
        credentials: "include",
      });

      if (res.ok) {
        // Redirect to login page after successful logout
        navigate("/login");
      } else {
        console.log("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-yellow-50 via-purple-50 to-amber-50 m-0 min-h-screen">
        
        {/* ===== Top Navigation Bar ===== */}
        <div className="w-full flex justify-between items-center p-4 bg-white/50 shadow-sm mb-6">
          <Link 
            to="/login" 
            className="text-purple-700 font-semibold hover:text-purple-900 hover:underline transition-all"
          >
            ← Back to Login
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors shadow-sm"
          >
            Logout
          </button>
        </div>

        <p className="text-5xl m-5 mt-0 text-center text-amber-800">
          Upload Images
        </p>

        <form onSubmit={handleUpload}>
          <div className="flex flex-col items-center">
            
            <select
              name="category"
              required
              className="border border-purple-500 rounded-lg p-3 m-3 w-[40ch] hover:border-black"
            >
              <option value="">Select Category</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Haldi">Haldi</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Reception">Reception</option>
            </select>
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
          {message && (
          <div className="fixed bottom-6 right-6 bg-[#7b113a] text-white px-6 py-3 rounded-lg shadow-2xl z-50 transition-all duration-300">
            <h3 className="font-medium text-lg">{message}</h3>
          </div>
        )}
        </div>
        <div className="columns-2 md:columns-4 gap-6 m-8 overflow-x-hidden md:m-10">
          {images.map((image) => {
            return (
              <div key={image._id} className="image-container flex flex-col gap-4 break-inside-avoid mb-6">
                <img
                  src={image.image.url}
                  loading="lazy"
                  alt="uploaded content"
                  className="w-full object-cover rounded-md shadow-sm"
                />

                <button
                  className="border bg-red-300 hover:bg-red-400 m-2 rounded-lg py-2 px-4 transition-colors"
                  onClick={() => handleDelete(image._id, image.publicID)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Admin;