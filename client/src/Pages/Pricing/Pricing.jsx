import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const pricingData = [
  {
    id: 1,
    bnTitle: "সম্প্রদান",
    enTitle: "PACKAGE 1",
    team: "1 SENIOR PHOTOGRAPHER\n&\n1 CINEMATOGRAPHER",
    coverage: "HOLUD & WEDDING FULL COVERAGE\nWITH ODHIBASH",
    price: "15,000 BDT",
    imgUrl: "/Wedding1.jpg",
  },
  {
    id: 2,
    bnTitle: "উৎসর্গ",
    enTitle: "PACKAGE 2",
    team: "1 SENIOR PHOTOGRAPHER\n&\n1 CINEMATOGRAPHER",
    coverage: "WEDDING & RECEPTION\nFULL EVENT COVERAGE",
    price: "12,000 BDT",
    imgUrl: "/Wedding2.jpg",
  },
  {
    id: 3,
    bnTitle: "আশীর্বাদ",
    enTitle: "PACKAGE 3",
    team: "1 SENIOR PHOTOGRAPHER\n&\n1 CINEMATOGRAPHER",
    coverage: "SINGLE EVENT (HOLUD / WEDDING)\nFULL COVERAGE",
    price: "8,000 BDT",
    imgUrl: "/Haldi.jpg",
  },
  {
    id: 4,
    bnTitle: "গোধূলি",
    enTitle: "PACKAGE 4",
    team: "1 SENIOR PHOTOGRAPHER\n&\n1 CINEMATOGRAPHER",
    coverage: "PRE-WEDDING OR POST-WEDDING\nOUTDOOR COUPLE SHOOT",
    price: "10,000 BDT",
    imgUrl: "/Reception.jpg",
  },
];

const Pricing = () => {
  return (
    <>
      <Navbar />
      <section className="w-full bg-[#f8f9fa] py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* ===== Header Section ===== */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif uppercase mb-6 text-black tracking-wide">
              OUR PRICING PLANS
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Discover our competitive pricing packages designed to fit every
              budget and photography need. Click on any image to view detailed
              pricing information.
            </p>
          </div>

          {/* ===== Pricing Cards Grid ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {pricingData.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col xl:flex-row w-full cursor-pointer hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Left Side: Text Details */}
                <div className="w-full xl:w-1/2 p-8 flex flex-col items-center justify-center text-center">
                  <h3 className="text-3xl font-bold text-[#7b113a] mb-1">
                    {pkg.bnTitle}
                  </h3>
                  <h4 className="text-sm font-semibold tracking-widest text-[#7b113a] uppercase mb-4">
                    {pkg.enTitle}
                  </h4>

                  {/* Custom Divider */}
                  <div className="w-16 h-[2px] bg-[#7b113a] mb-6"></div>
                  <div className="w-10 h-[1px] bg-[#7b113a] mb-6 -mt-4"></div>

                  <p className="text-[#7b113a] font-serif font-bold text-sm md:text-base leading-loose whitespace-pre-line mb-6">
                    {pkg.team}
                  </p>

                  <p className="text-[#7b113a] font-serif font-bold text-xs md:text-sm leading-loose whitespace-pre-line uppercase mb-6">
                    {pkg.coverage}
                  </p>

                  {/* Price Display */}
                  <div className="mt-auto border-t border-[#7b113a]/20 w-full pt-4">
                    <p className="text-2xl font-bold font-serif text-[#7b113a]">
                      {pkg.price}
                    </p>
                  </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full xl:w-1/2 h-64 xl:h-auto">
                  <img
                    src={pkg.imgUrl}
                    alt={pkg.enTitle}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ===== Booking CTA Section ===== */}
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-serif uppercase mb-6 text-black tracking-wide">
              READY TO BOOK YOUR SESSION?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12">
              Contact us today to discuss your photography needs and get a
              personalized quote. We're here to capture your special moments!
            </p>

            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] w-full max-w-3xl mx-auto p-10 md:p-14 flex flex-col items-center">
              {/* Phone Icon */}
              <svg
                className="w-8 h-8 text-blue-600 mb-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>

              <h3 className="text-2xl text-gray-800 font-medium mb-2">
                Call Us Now
              </h3>

              <a
                href="tel:01710636343"
                className="text-3xl md:text-4xl font-bold text-blue-600 mb-10 hover:text-blue-700 transition-colors"
              >
                +880 1537-440768
              </a>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full justify-center">
                <a
                  href="tel:+880 1537-440768"
                  className="bg-blue-600 text-white rounded-full px-8 py-4 flex items-center justify-center font-medium w-full md:w-auto hover:bg-blue-700 transition-colors shadow-md text-lg"
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </a>

                <a
                  href="/contact"
                  className="bg-transparent border-2 border-blue-600 text-blue-600 rounded-full px-8 py-4 flex items-center justify-center font-medium w-full md:w-auto hover:bg-blue-50 transition-colors shadow-sm text-lg"
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contact Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
