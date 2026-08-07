import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <style>
        {`
          .chitr-font-head {
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            color: white;
          }
          .chitr-font-body {
            font-family: 'Inter', sans-serif;
            font-weight: 400;
          }
        `}
      </style>
      <footer className="bg-[#0a0a0a] pt-10 pb-6 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 mb-10 items-start">
          
          {/* Column 1: Logo and About */}
          <div className="space-y-4">
            <div className="mb-0">
              <img src="/logoBlack.png" alt="Chitromoncho" className="h-20 mt-3 mb-2 " /> 
            </div>
            <p className="chitr-font-body text-[16px] text-zinc-300 leading-snug pr-4">
              We turn fleeting moments into timeless art. Whether it's a wedding, portrait, or lifestyle shoot—our studio is where life meets light.
            </p>
            <div className="flex gap-4 text-lg">
              <a href="https://www.facebook.com/profile.php?id=61565622652842" className="text-white hover:text-zinc-300 transition-colors"><FaFacebookF /></a>
              <a href="#" className="text-white hover:text-zinc-300 transition-colors"><FaTwitter /></a>
              <a href="#" className="text-white hover:text-zinc-300 transition-colors"><FaYoutube /></a>
              <a href="https://www.instagram.com/remnantwedding" className="text-white hover:text-zinc-300 transition-colors"><FaInstagram /></a>
            </div>
          </div>

          {/* Column 2: Recent Photography */}
          <div className="pt-2">
            <h3 className="chitr-font-head text-lg mb-5 tracking-wide">RECENT PHOTOGRAPHY</h3>
            <div className="grid grid-cols-3 gap-2 pr-2">
              <img src="/Haldi.jpg" alt="Recent 1" className="w-full h-56 object-cover  md:h-36" /> 
              <img src="/Wedding1.jpg" alt="Recent 2" className="w-full h-56 object-cover  md:h-36" />
              <img src="/Wedding2.jpg" alt="Recent 3" className="w-full h-56 object-cover  md:h-36" />
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="pt-2">
            <h3 className="chitr-font-head text-lg mb-5 tracking-wide">QUICK LINKS</h3>
            <div className="grid grid-cols-2 gap-y-3">
              <a href="/" className="chitr-font-body text-[16px] text-zinc-300 hover:text-white transition-colors">Home</a>
              <a href="/gallery" className="chitr-font-body text-[16px] text-zinc-300 hover:text-white transition-colors">Gallery</a>
              <a href="/about" className="chitr-font-body text-[16px] text-zinc-300 hover:text-white transition-colors">About</a>
              <a href="/services" className="chitr-font-body text-[16px] text-zinc-300 hover:text-white transition-colors">Services</a>
              <a href="/contact" className="chitr-font-body text-[16px] text-zinc-300 hover:text-white transition-colors">Contact</a>
              <a href="/pricing" className="chitr-font-body text-[16px] text-zinc-300 hover:text-white transition-colors">Pricing</a>
             
            </div>
          </div>

          {/* Column 4: Subscribe */}
          <div className="pt-2">
            <h3 className="chitr-font-head text-lg mb-5 tracking-wide">SUBSCRIBE</h3>
            <p className="chitr-font-body text-[16px] text-zinc-300 mb-4 pr-2">
              Subscribe to Remnant Weeding's Photography - where every frame tells a story
            </p>
            <div className="flex w-full">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border border-red-800 text-zinc-300 text-[16px] px-5 py-3 focus:outline-none focus:border-gray-500 chitr-font-body"
              />
              <button className="bg-[#800020] text-white px-4 flex items-center justify-center hover:bg-[#600018] transition-colors text-lg py-1.5"> 
                <FaPaperPlane />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-800 pt-5 text-center">
          <p className="chitr-font-body text-[16px] text-zinc-300">Copyright ©2026 All rights reserved | Design & Developed By Business Assessment</p>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;