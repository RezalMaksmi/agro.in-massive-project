import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import logoText from "../../assets/logo/logo-txt-hijau.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);
  return (
    <div className="w-full md:px-10 px-3 fixed top-7 z-50">
      <div className="w-full h-[70px] text-[#1A3D37] bg-[#E8ECEB] relative rounded-full flex justify-between px-6 items-center">
        <img src={logoText} alt="" />
        <div className={`md:block ${isOpen ? `block` : `hidden`}`}>
          <ul className="flex p-0 px-5 py-2 md:flex-row flex-col md:relative absolute md:top-0 md:left-0 md:right-0 top-20 left-0 md:bg-transparent bg-[#1A3D37] rounded-lg w-full md:gap-10 gap-5 font-semibold">
            <li>Home</li>
            <li>Tentang Kami</li>
            <li>Layanan</li>
            <li>Artikel</li>
          </ul>
        </div>
        <button className="bg-white px-4 py-2 rounded-full">Login</button>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleNavbar}
            type="button"
            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
