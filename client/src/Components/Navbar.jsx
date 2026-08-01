import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [barClicked,setBarClicked]=useState(false)
    const barClick = () => {
        setBarClicked(!barClicked)
    }
  return (
    <>
    <div className="flex flex-row justify-between py-11 px-8  md:px-14">
      <div>
        <Link to="/"><p className="font-medium md:text-2xl">LEVON BISS</p></Link>
      </div>
      <div className=" hidden md:flex flex-row gap-8 text-[18px]">
        <Link to="/" className=" hover:border-b">Overview</Link>
        <Link to="/about" className=" hover:border-b">About</Link>
        <Link to="/contact" className=" hover:border-b">Contact</Link>
        <a href="https://www.instagram.com/levonbiss/" >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/levon-biss-152a6755/">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <button onClick={barClick} className="md:hidden"><i class="fa-solid fa-bars text-gray-700"></i></button>
    </div>
    {barClicked && (
      <div className="fixed inset-0 z-50 h-screen bg-white md:hidden ">
        <div className="flex flex-row justify-between py-11 px-8 md:px-14">
      <div>
        <Link to="/"><p className="font-medium bg-white md:text-2xl">LEVON BISS</p></Link>
      </div>
      <button onClick={barClick} className="text-xl bg-white    "><i class="fa-solid fa-x text-gray-700 "></i></button>
    </div>
     <div className="flex flex-col gap-10 m-5 text-4xl items-center ">
        <Link to="/"  onClick={barClick} className="">Overview</Link>
        <Link to="/about" onClick={barClick}>About</Link>
        <Link to="/contact" onClick={barClick}>Contact</Link>
        <div className="flex flex-row gap-8 mt-20">
          <a href="https://www.instagram.com/levonbiss/" >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/levon-biss-152a6755/">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        </div>
      </div>
      </div>
    )}
    </>
  );
};

export default Navbar;

