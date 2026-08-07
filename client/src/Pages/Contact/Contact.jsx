import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Contact = () => {
  return (
    <>
      <div className="w-full bg-white">
        {/* ===== Map Section ===== */}
        <div className="w-full h-[400px] md:h-[500px] bg-gray-200">
          <iframe
            title="Google Map Dhaka"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.0097778216!2d90.33728804060856!3d23.780777744501657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* ===== Content Section ===== */}
        <section className="max-w-[1400px] mx-auto py-16 md:py-24 px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column: Get In Touch */}
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold font-serif uppercase mb-4 text-black">
                GET IN TOUCH
              </h2>
              <p className="text-gray-700 mb-12 text-lg">
                Reach out — your memories deserve the perfect frame.
              </p>

              <div className="flex flex-col gap-10">
                {/* Address */}
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-[#7b113a] flex items-center justify-center flex-shrink-0 mr-6 text-white shadow-md">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif uppercase mb-1 text-black">
                      ADDRESS
                    </h3>
                    <p className="text-gray-600 text-lg">Ecb Chattor, Dhaka, Bangladesh</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-[#7b113a] flex items-center justify-center flex-shrink-0 mr-6 text-white shadow-md">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif uppercase mb-1 text-black">
                      PHONE
                    </h3>
                    <p className="text-gray-600 text-lg">+880 1537-440768</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-[#7b113a] flex items-center justify-center flex-shrink-0 mr-6 text-white shadow-md">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif uppercase mb-1 text-black">
                      EMAIL
                    </h3>
                    <p className="text-gray-600 text-lg">
                      remnantweddingbd@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hire Us Form */}
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold font-serif uppercase mb-8 text-black">
                HIRE US!
              </h2>
              <form
                className="flex flex-col gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-200 p-4 text-gray-700 focus:outline-none focus:border-[#7b113a] bg-white shadow-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full border border-gray-200 p-4 text-gray-700 focus:outline-none focus:border-[#7b113a] bg-white shadow-sm"
                />
                <input
                  type="text"
                  placeholder="location"
                  className="w-full border border-gray-200 p-4 text-gray-700 focus:outline-none focus:border-[#7b113a] bg-white shadow-sm"
                />
                <textarea
                  placeholder="Message"
                  className="w-full border border-gray-200 p-4 text-gray-700 focus:outline-none focus:border-[#7b113a] bg-white shadow-sm h-40 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="bg-[#7b113a] text-white font-bold tracking-widest px-10 py-4 uppercase mt-2 w-max hover:bg-[#5a0c2a] transition-colors shadow-md"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
