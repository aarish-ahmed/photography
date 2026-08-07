import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../public/logo.png'
const Navbar = () => {
    const [barClicked,setBarClicked]=useState(false)
    const barClick = () => {
        setBarClicked(!barClicked)
    }
  return (
    <>
    <div className="flex flex-row justify-between items-center py-4 px-6  md:px-14 md:py-5">
      <div>
        <Link to="/"><img src={logo} className="h-18 w-18"></img></Link>
      </div>
      <div className=" hidden md:flex flex-row gap-8 text-[18px]">
        <Link to="/" className=" hover:border-b">Overview</Link>
        <Link to="/services" className=" hover:border-b">Services</Link>
        <Link to="/about" className=" hover:border-b">About</Link>
        <Link to="/gallery" className=" hover:border-b">Gallery</Link>
        <Link to="/pricing" className=" hover:border-b">Pricing</Link>
        <Link to="/contact" className=" hover:border-b">Contact</Link>
        <a href="https://www.instagram.com/remnantwedding" >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://wa.me/1537440768" target="_blank" rel="noopener noreferrer">
  <i class="fa-brands fa-whatsapp"></i>
</a>
      </div>
      <button onClick={barClick} className="md:hidden"><i class="fa-solid fa-bars text-gray-700"></i></button>
    </div>
    {barClicked && (
      <div className="fixed inset-0 z-50 h-screen bg-white md:hidden ">
        <div className="flex flex-row justify-between py-11 px-8 md:px-14">
      <div>
        <Link to="/"><img src={logo} className="h-18 w-18"></img></Link>
      </div>
      <button onClick={barClick} className="text-xl bg-white    "><i class="fa-solid fa-x text-gray-700 "></i></button>
    </div>
     <div className="flex flex-col gap-10 m-5 text-4xl items-center ">
        <Link to="/"  onClick={barClick} className=" hover:border-b">Overview</Link>
        <Link to="/services" onClick={barClick} className=" hover:border-b">Services</Link>
        <Link to="/about" onClick={barClick}className=" hover:border-b">About</Link>
        <Link to="/gallery" onClick={barClick}className=" hover:border-b">Gallery</Link>
        <Link to="/pricing" onClick={barClick}className=" hover:border-b">Pricing</Link>
        <Link to="/contact" onClick={barClick}className=" hover:border-b">Contact</Link>
        <div className="flex flex-row gap-8 mt-1">
          <a href="https://www.instagram.com/remnantwedding" >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://wa.me/1537440768" target="_blank" rel="noopener noreferrer">
  <i class="fa-brands fa-whatsapp"></i>
</a>
        </div>
      </div>
      </div>
    )}
    </>
  );
};

export default Navbar;

